const mongoose = require("mongoose");

const CardHolderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  cardNumber: {
    type: Number,
  },
});

module.exports = mongoose.model("CardHolder", CardHolderSchema);
