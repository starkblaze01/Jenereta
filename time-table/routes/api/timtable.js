const express = require("express");
const router = express.Router();

// @route       GET api/timetable/test
// @desc        Tests timetable route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "timetable works" }));

module.exports = router;
