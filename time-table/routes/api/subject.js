const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateSubjectInput = require("../../validation/profile");

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
      subjectFields.subject.forEach(subjectname => {
        subjectname = subjectname.trim();
      });
    }

    Subject.findOne({ user: req.user.id }).then(subject => {
      if (subject) {
        // Update
        subjectFields.subject.forEach(subjects => {
          if (subject.subject.includes(subjects)) {
            return res.json({ msg: "Teacher's Name already Exist" });
          } else {
            Subject.findByIdAndUpdate(
              { user: req.user.id },
              { $push: { subject: subject.subject } },
              { new: true }
            )
              .then(subject => res.json(subject))
              .catch(err => res.json(err));
          }
        });
        // Update
      } else {
        //Create
        //Save Profile
        Subject.findOne({ user: req.user.id }).then(subject => {
          new Subject(subjectFields).save.then(subject => res.json(subject));
        });
      }
    });
  }
);

module.exports = router;
