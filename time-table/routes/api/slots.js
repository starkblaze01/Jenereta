const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Slots Model
const Slots = require("../../models/Slots");
//Load User Model
const User = require("../../models/Users");

const validateSlotsInput = require("../../validation/slots");
const validateSlotDetailsInput = require("../../validation/slotdetail");

// @route       GET api/slots/test
// @desc        Tests slots route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "slots works" }));

// @route       GET api/slots
// @desc        get slots
// @access      Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Slots.findOne({ user: req.user.id })
      .then(slot => {
        if (!slot) {
          errors.noslot = "There is no data available";
          return res.status(404).json(errors);
        }
        res.json(slot);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route       POST api/slots
// @desc        Create or edit numSlots
// @access      Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSlotsInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //Get fields
    const numSlotsFields = {};
    numSlotsFields.user = req.user.id;
    numSlotsFields.monday = req.body.monday;
    numSlotsFields.tuesday = req.body.tuesday;
    numSlotsFields.wednesday = req.body.wednesday;
    numSlotsFields.thursday = req.body.thursday;
    numSlotsFields.friday = req.body.friday;
    numSlotsFields.saturday = req.body.saturday;
    //console.log(numSlotsFields);

    Slots.findOne({ user: req.user.id }).then(slots => {
      if (slots) {
        // Update
        Slots.findOneAndUpdate(
          { user: req.user.id },
          {
            $set: {
              monday: numSlotsFields.monday,
              tuesday: numSlotsFields.tuesday,
              wednesday: numSlotsFields.wednesday,
              thursday: numSlotsFields.thursday,
              friday: numSlotsFields.friday,
              saturday: numSlotsFields.saturday
            }
          },
          { new: true }
        ).then(slots => res.json(slots));
      } else {
        //Create
        //Save numSlots
        Slots.findOne({ user: req.user.id }).then(slots => {
          new Slots(numSlotsFields).save().then(slots => res.json(slots));
        });
      }
    });
  }
);

// @route       POST api/slots/slot
// @desc        Create or edit slot
// @access      Private
router.post(
  "/slot",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSlotDetailsInput(req.body);

    // check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    Slots.findOne({ user: req.user.id }).then(slots => {
      const newSlot = {
        teacher: req.body.teacher,
        sections: req.body.sections,
        subject: req.body.subject,
        numLectures: req.body.numLectures
      };
      if (isNaN(newSlot.numLectures)) {
        errors.invalidNumber = "Invalid Number";
        return res.status(404).json(errors);
      }
      // Add to lab array
      slots.slots.unshift(newSlot);
      // console.log(subject.lab);
      slots.save().then(slots => res.json(slots));
    });
  }
);

// @route       DELETE api/slots/slot/:slot_id
// @desc        Delete Slots
// @access      Private
router.delete(
  "/slot/:slot_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Slots.findOneAndUpdate({ user: req.user.id })
      .then(slots => {
        //GET remove index
        const removeIndex = slots.slots
          .map(item => item.id)
          .indexOf(req.params.slot_id);

        //Splice out of array
        slots.slots.splice(removeIndex, 1);

        //Save
        slots.save().then(slots => res.json(slots));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
