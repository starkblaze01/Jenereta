const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load TeachersName Model
const TeachersName = require("../../models/ClassAndsec");
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
        res.json(subject);
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
    //Get fields
    const teachersNameFields = {};
    teachersNameFields.user = req.user.id;
    //Split into array
    if (typeof req.body.teachersName !== "undefined") {
      teachersNameFields.teachersName = req.body.teachersName.split(",");
    }

    TeachersName.findOne({ user: req.user.id }).then(teachersName => {
      if (teachersName) {
        // Update
        TeachersName.findByIdAndUpdate(
          { user: req.user.id },
          { $addToSet: teachersName },
          { new: true }
        ).then(teachersName => res.json(teachersName));
      } else {
        //Create
        //Save Profile
        new TeachersName(teachersNameFields).save.then(teachersName =>
          res.json(teachersName)
        );
      }
    });
  }
);

module.exports = router;
