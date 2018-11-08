const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateClassAndsecInput = require("../../validation/classAndsec");

// Load ClassAndsec Model
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
      for (var i = 0; i < classAndsecFields.classAndsec.length; i++) {
        classAndsecFields.classAndsec[i] = classAndsecFields.classAndsec[
          i
        ].trim();
      }
      //classAndsecFields.classAndsec.forEach(classsec => {
      //  classsec = classsec.trim();
      //});
    }

    ClassAndsec.findOne({ user: req.user.id }).then(classAndsec => {
      if (classAndsec) {
        classAndsecFields.classAndsec.forEach(classsec => {
          if (classAndsec.classAndsec.includes(classsec)) {
            errors.classAndsec = "This Class-Section already Exist";
            return res.status(400).json(errors);
            //return res.json({ msg: "This Class Sec already Exist" });
          } else {
            // Update
            ClassAndsec.findOneAndUpdate(
              { user: req.user.id },
              { $push: { classAndsec: classsec } },
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
          new ClassAndsec(classAndsecFields)
            .save()
            .then(classAndsec => res.json(classAndsec));
        });
      }
    });
  }
);

// @route       DELETE api/teachersName/:Class and sec
// @desc        Delete classandsec
// @access      Private
router.delete(
  "/:class",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // ClassAndsec.findOneAndUpdate(
    //   { user: req.user.id },
    //   { $pull: { classAndsec: req.body.classAndsec } },
    //   { new: true }
    // )
    //   .then(classAndsec => res.json(classAndsec))
    ClassAndsec.findOneAndUpdate({ user: req.user.id })
      .then(classAndsec => {
        //GET remove index
        const removeIndex = classAndsec.classAndsec
          .map(item => item)
          .indexOf(req.params.class);

        //Spile out of array
        classAndsec.classAndsec.splice(removeIndex, 1);

        //Save
        classAndsec.save().then(classAndsec => res.json(classAndsec));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
