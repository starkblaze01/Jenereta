const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateProfileInput = require("../../validation/profile");
// Load Profile Model
const Profile = require("../../models/Profile");
//Load User Model
const User = require("../../models/Users");
//Load Teacher Model
const TeachersName = require("../../models/TeachersName");
//Load Class Model
const ClassAndsec = require("../../models/ClassAndsec");
//Load Subject Model
const Subject = require("../../models/Subject");
//Load Slot Model
const Slots = require("../../models/Slots");

// @route       GET api/profile/test
// @desc        Tests profile route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

// @route       GET api/profile
// @desc        get profile
// @access      Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar", "email"])
      .then(profile => {
        // console.log(profile);
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route       POST api/profile
// @desc        Create or edit user profile
// @access      Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.institute) profileFields.institute = req.body.institute;
    if (req.body.institutewebsite)
      profileFields.institutewebsite = req.body.institutewebsite;
    //console.log(profileFields);

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //Create
        //Save Profile
        Profile.findOne({ user: req.user.id }).then(profile => {
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route       DELETE api/profile
// @desc        Delete user and profile
// @access      Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      TeachersName.findOneAndRemove({ user: req.user.id }).then(() => {
        ClassAndsec.findOneAndRemove({ user: req.user.id }).then(() => {
          Subject.findOneAndRemove({ user: req.user.id }).then(() => {
            Slots.findOneAndRemove({ user: req.user.id }).then(() => {
              User.findOneAndRemove({ _id: req.user.id }).then(() =>
                res.json({ success: true })
              );
            });
          });
        });
      });
    });
  }
);

module.exports = router;
