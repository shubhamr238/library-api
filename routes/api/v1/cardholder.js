const express = require("express");
const router = express.Router();

const CardHolderController = require("../../../controller/api/v1/CardHolderController");

router.post("/add", CardHolderController.addCardHolder);

module.exports = router;
