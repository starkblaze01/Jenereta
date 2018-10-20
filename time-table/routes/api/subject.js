const express = require("express");
const router = express.Router();

// @route       GET api/subject/test
// @desc        Tests subject route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "subject works" }));

module.exports = router;
