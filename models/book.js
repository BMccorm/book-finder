const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  link: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  authors: {
    type: [String],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  thumbnail: {
    type: String,
    trim: true,
  }
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
