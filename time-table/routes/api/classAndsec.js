const express = require("express");
const router = express.Router();

// @route       GET api/classAndsec/test
// @desc        Tests classAndsec route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "classAndsec works" }));

module.exports = router;
