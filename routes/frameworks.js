const express = require("express");
const { getFrameworks } = require("../controllers/frameworks");
const router = express.Router();

router.route("/").get(getFrameworks);

module.exports = router;
