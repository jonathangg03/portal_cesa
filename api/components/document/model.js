const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  size: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  user: {
    required: true,
    type: String,
  },
  archived: {
    required: true,
    type: Boolean,
  },
  document: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("document", mySchema);
