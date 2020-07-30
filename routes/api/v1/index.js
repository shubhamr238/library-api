const express = require("express");
const router = express.Router();

// Handling v1 routes
router.use("/book", require("./book"));
router.use("/cardholder", require("./cardholder"));

module.exports = router;
