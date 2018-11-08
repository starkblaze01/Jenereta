const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateTeachersNameInput = require("../../validation/teachersName");

// Load TeachersName Model
const TeachersName = require("../../models/TeachersName");
//Load User Model
const User = require("../../models/Users");

// @route       GET api/teacherName/test
// @desc        Tests teachersName route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "teachersName works" }));

// @route       GET api/teachersName
// @desc        get teachersName
// @access      Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    TeachersName.findOne({ user: req.user.id })
      .then(teachersName => {
        if (!teachersName) {
          errors.noteachersName = "There is no data available";
          return res.status(404).json(errors);
        }
        res.json(teachersName);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route       POST api/classAndsec
// @desc        Create or edit classAndsec
// @access      Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTeachersNameInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const teachersNameFields = {};
    teachersNameFields.user = req.user.id;
    //Split into array
    if (typeof req.body.teachersName !== "undefined") {
      teachersNameFields.teachersName = req.body.teachersName.split(",");
      for (var i = 0; i < teachersNameFields.teachersName.length; i++) {
        teachersNameFields.teachersName[i] = teachersNameFields.teachersName[
          i
        ].trim();
      }
      // teachersNameFields.teachersName.forEach(teacher => {
      //   teacher = teacher.trim();
      //   // console.log(teacher);
      // });
    }

    TeachersName.findOne({ user: req.user.id }).then(teachersName => {
      if (teachersName) {
        // Update
        teachersNameFields.teachersName.forEach(teacher => {
          if (teachersName.teachersName.includes(teacher)) {
            errors.teachersName = "Teacher's Name already exists";
            return res.status(400).json(errors);
            //return res.json({ msg: "Teacher's Name already Exist" });
          } else {
            //console.log(teachersNameFields);
            TeachersName.findOneAndUpdate(
              { user: req.user.id },
              { $push: { teachersName: teacher } },
              { new: true }
            )
              .then(teachersName => res.json(teachersName))
              .catch(err => res.json(err));
          }
        });
      } else {
        //Create
        //Save Profile
        TeachersName.findOne({ user: req.user.id }).then(teachersName => {
          new TeachersName(teachersNameFields)
            .save()
            .then(teachersName => res.json(teachersName));
        });
      }
    });
  }
);

// @route       DELETE api/teachersName/:taecher_name
// @desc        Delete teachersName
// @access      Private
router.delete(
  "/:tcr",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // TeachersName.findOneAndUpdate(
    //   { user: req.user.id },
    //   { $pull: { teachersName: req.params.teachersName } },
    //   { new: true }
    // )
    //   .then(
    //     teachersName => res.json(teachersName)

    //   )
    TeachersName.findOneAndUpdate({ user: req.user.id })
      .then(teachersName => {
        //GET remove index
        const removeIndex = teachersName.teachersName
          .map(item => item)
          .indexOf(req.params.tcr);

        //Splice out of array
        teachersName.teachersName.splice(removeIndex, 1);

        //Save
        teachersName.save().then(teachersName => res.json(teachersName));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
