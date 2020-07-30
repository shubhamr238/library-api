const mongoose = require("mongoose");

// Schema for rental
const RentalSchema = new mongoose.Schema({
  cardHolder: {
    type: mongoose.Schema.ObjectId,
    ref: "CardHolder",
  },
  book: {
    type: mongoose.Schema.ObjectId,
    ref: "Book",
  },
});

module.exports = mongoose.model("Rental", RentalSchema);
