const express = require("express");
const router = express.Router();

const BookController = require("../../../controller/api/v1/BookController");

router.post("/add", BookController.addBook);
router.get("/get-all", BookController.getAllBooks);
router.post("/rent", BookController.rentBook);

module.exports = router;
