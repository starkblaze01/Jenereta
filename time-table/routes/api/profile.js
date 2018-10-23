const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
//Load User Model
const User = require("../../models/Users");

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
      .then(profile => {
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
    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.institute = req.body.institute;
    if (req.body.handle)
      profileFields.institutewebsite = req.body.institutewebsite;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findByIdAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //Create
        //Save Profile
        new Profile(profileFields).save.then(profile => res.json(profile));
      }
    });
  }
);

module.exports = router;
