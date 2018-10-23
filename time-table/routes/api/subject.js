const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

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
    //Get fields
    const subjectFields = {};
    subjectFields.user = req.user.id;
    //Split into array
    if (typeof req.body.subject !== "undefined") {
      subjectFields.subject = req.body.subject.split(",");
    }

    Subject.findOne({ user: req.user.id }).then(subject => {
      if (subject) {
        // Update
        Subject.findByIdAndUpdate(
          { user: req.user.id },
          { $addToSet: subjectFields },
          { new: true }
        ).then(subject => res.json(subject));
      } else {
        //Create
        //Save Profile
        new Subject(subjectFields).save.then(subject => res.json(subject));
      }
    });
  }
);

module.exports = router;
