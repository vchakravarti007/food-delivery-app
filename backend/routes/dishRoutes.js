const express = require("express");

const router = express.Router();

const { getDishes } = require("../controllers/dishController");

router.get("/dishes", getDishes);

module.exports = router;
