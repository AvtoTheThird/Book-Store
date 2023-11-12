const mongoose = require("mongoose");
const User = require("./User");
const roomSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

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
  location: { type: String, required: true },

  coverType: { type: String, required: true },

  description: { type: String },
});

const roomModel = mongoose.model("Room", roomSchema);
module.exports = roomModel;
