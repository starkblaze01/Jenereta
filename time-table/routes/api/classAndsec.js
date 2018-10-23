const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const ClassAndsec = require("../../models/ClassAndsec");
//Load User Model
const User = require("../../models/Users");

// @route       GET api/classAndsec/test
// @desc        Tests classAndsec route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "classAndsec works" }));

// @route       GET api/classAndsec
// @desc        get classAndsec
// @access      Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    ClassAndsec.findOne({ user: req.user.id })
      .then(classAndsec => {
        if (!classAndsec) {
          errors.noclassAndsec = "There is no data available";
          return res.status(404).json(errors);
        }
        res.json(classAndsec);
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
    const classAndsecFields = {};
    classAndsecFields.user = req.user.id;
    //Split into array
    if (typeof req.body.classAndsec !== "undefined") {
      classAndsecFields.classAndsec = req.body.classAndsec.split(",");
    }

    ClassAndsec.findOne({ user: req.user.id }).then(classAndsec => {
      if (classAndsec) {
        // Update
        ClassAndsec.findByIdAndUpdate(
          { user: req.user.id },
          { $addToSet: classAndsecFields },
          { new: true }
        ).then(classAndsec => res.json(classAndsec));
      } else {
        //Create
        //Save Profile
        new ClassAndsec(classAndsecFields).save.then(classAndsec =>
          res.json(classAndsec)
        );
      }
    });
  }
);

module.exports = router;
