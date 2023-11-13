const mongoose = require("mongoose");
const User = require("./User");
const BookSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  image: { type: String, required: true },

  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  dealType: { type: String, required: true },
  price: { type: String },
  phone: { type: String },

  location: { type: String, required: true },

  coverType: { type: String, required: true },
  language: { type: String, required: true },

  description: { type: String },
});

const bookModel = mongoose.model("Book", BookSchema);
module.exports = bookModel;
