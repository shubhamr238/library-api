const CardHolder = require("../../../models/CardHolder");

module.exports.addCardHolder = async function (req, res) {
  try {
    let cardHolder = await CardHolder.create(req.body);
    res.status(201).json({
      success: true,
      body: cardHolder,
      msg: "CardHolder Registered Sucessfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Error Occoured!",
    });
  }
};
