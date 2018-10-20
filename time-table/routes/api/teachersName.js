const express = require("express");
const router = express.Router();

// @route       GET api/users/test
// @desc        Tests teachersName route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "teachersName works" }));

module.exports = router;
