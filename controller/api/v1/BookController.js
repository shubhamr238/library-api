const Book = require("../../../models/Book");
const CardHolder = require("../../../models/CardHolder");
const Rental = require("../../../models/Rental");

module.exports.addBook = async function (req, res) {
  try {
    let book = await Book.create(req.body);
    res.status(201).json({
      success: true,
      body: book,
      msg: "Book Sucessfully Added to Library!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Error Occoured!",
    });
  }
};

module.exports.getAllBooks = async function (req, res) {
  try {
    const rentedBooks = await Book.find({ isAvailable: false }).populate();
    if ((await rentedBooks).length == 0) {
      return res.status(200).json({
        success: true,
        body: rentedBooks,
        msg: "None of the books are Rented at Present!",
      });
    }
    return res.status(200).json({
      success: true,
      body: rentedBooks,
      msg: "Books that are Rented at Present!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Error Occoured!",
    });
  }
};

module.exports.rentBook = async function (req, res) {
  try {
    const { cardHolderId, bookId } = req.body;
    const cardHolderObj = await CardHolder.findById(cardHolderId);
    const bookObj = await Book.findById(bookId);

    await bookObj.updateOne({ isAvailable: false });

    const rental = await Rental.create({
      book: bookObj,
      cardHolder: cardHolderObj,
    });

    return res.status(200).json({
      success: true,
      body: rental,
      msg: "Book Rented Sucessfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Error Occoured!",
    });
  }
};
