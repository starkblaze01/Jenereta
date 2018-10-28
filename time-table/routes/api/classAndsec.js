const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateClassAndsecInput = require("../../validation/profile");

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
    const { errors, isValid } = validateClassAndsecInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const classAndsecFields = {};
    classAndsecFields.user = req.user.id;
    //Split into array
    if (typeof req.body.classAndsec !== "undefined") {
      classAndsecFields.classAndsec = req.body.classAndsec.split(",");
      classAndsecFields.classAndsec.forEach(classsec => {
        classsec = classsec.trim();
      });
    }

    ClassAndsec.findOne({ user: req.user.id }).then(classAndsec => {
      if (classAndsec) {
        classAndsecFields.classAndsec.forEach(classsec => {
          if (teachersName.teachersName.includes(classsec)) {
            return res.json({ msg: "This Class Sec already Exist" });
          } else {
            // Update
            ClassAndsec.findByIdAndUpdate(
              { user: req.user.id },
              { $push: { classAndsec: classAndsecFields.classAndsec } },
              { new: true }
            )
              .then(classAndsec => res.json(classAndsec))
              .catch(err => res.json(err));
          }
        });
      } else {
        //Create
        //Save Profile
        ClassAndsec.findOne({ user: req.user.id }).then(classAndsec => {
          new ClassAndsec(classAndsecFields).save.then(classAndsec =>
            res.json(classAndsec)
          );
        });
      }
    });
  }
);

// @route       DELETE api/teachersName/:teacher_id
// @desc        Delete teachersName
// @access      Private
router.delete(
  "/class",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ClassAndsec.findOneAndUpdate(
      { user: req.user.id },
      { $pull: { classAndsec: req.body.classAndsec } },
      { new: true }
    )
      .then(
        classAndsec => res.json(classAndsec)
        // //GET remove index
        // const removeIndex = teachersName.teachersName
        //   .map(item => item.id)
        //   .indexOf(req.params.teachersName);

        // //Spile out of array
        // teachersName.teachersName.splice(removeIndex, 1);

        // //Save
        // teachersName.save().then(teachersName => res.json(teachersName));
      )
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
