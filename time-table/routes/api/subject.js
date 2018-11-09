const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateSubjectInput = require("../../validation/subject");
const validateLabInput = require("../../validation/lab");

// Load Subject Model
const Subject = require("../../models/Subject");
//Load User Model
const User = require("../../models/Users");

// @route       GET api/subject/test
// @desc        Tests subject route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "subject works" }));

// @route       GET api/suject
// @desc        get subject
// @access      Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Subject.findOne({ user: req.user.id })
      .then(subject => {
        if (!subject) {
          errors.nosubject = "There is no data available";
          return res.status(404).json(errors);
        }
        res.json(subject);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route       POST api/subject
// @desc        Create or edit subject
// @access      Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSubjectInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const subjectFields = {};
    subjectFields.user = req.user.id;
    //Split into array
    if (typeof req.body.subject !== "undefined") {
      subjectFields.subject = req.body.subject.split(",");
      for (var i = 0; i < subjectFields.subject.length; i++) {
        subjectFields.subject[i] = subjectFields.subject[i].trim();
        //subjectFields.subject.forEach(subjectname => {
        // subjectname = subjectname.trim();
        //});
      }
      // console.log(subjectFields);
    }

    Subject.findOne({ user: req.user.id }).then(subject => {
      if (subject) {
        // Update
        subjectFields.subject.forEach(subjects => {
          if (subject.subject.includes(subjects)) {
            errors.subject = "Subject Name already exists";
            return res.status(400).json(errors);
            //return res.json({ msg: "Subject Name already Exist" });
          } else {
            Subject.findOneAndUpdate(
              { user: req.user.id },
              { $push: { subject: subjects } },
              { new: true }
            )
              .then(subject => res.json(subject))
              .catch(err => res.json(err));
          }
        });
      } else {
        //Create
        //Save Subject
        Subject.findOne({ user: req.user.id }).then(subject => {
          new Subject(subjectFields).save().then(subject => res.json(subject));
        });
      }
    });
  }
);

// @route       POST api/subject
// @desc        Create or edit subject
// @access      Private
router.post(
  "/labs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLabInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Subject.findOne({ user: req.user.id }).then(subject => {
      const newlab = {
        labname: req.body.labname,
        numberoflabs: req.body.numberoflabs
      };
      // Add to lab array
      subject.lab.unshift(newlab);
      // console.log(subject.lab);
      subject.save().then(subject => res.json(subject));
    });
  }
);

// @route       DELETE api/Subject/:Subject_name
// @desc        Delete Subject
// @access      Private
router.delete(
  "/:sbj",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Subject.findOneAndUpdate(
    //   { user: req.user.id },
    //   { $pull: { subject: req.body.subject } },
    //   { new: true }
    // )
    //   .then(
    //     subject => res.json(subject)

    //   )
    Subject.findOneAndUpdate({ user: req.user.id })
      .then(subject => {
        //GET remove index
        const removeIndex = subject.subject
          .map(item => item)
          .indexOf(req.params.sbj);

        //Splice out of array
        subject.subject.splice(removeIndex, 1);

        //Save
        subject.save().then(subject => res.json(subject));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route       DELETE api/Subject/labs/:lab_id
// @desc        Delete Subject
// @access      Private
router.delete(
  "/labs/:lab_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Subject.findOneAndUpdate({ user: req.user.id })
      .then(subject => {
        //GET remove index
        const removeIndex = subject.lab
          .map(item => item.id)
          .indexOf(req.params.lab_id);

        //Splice out of array
        subject.lab.splice(removeIndex, 1);

        //Save
        subject.save().then(subject => res.json(subject));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
