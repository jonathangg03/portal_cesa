const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  secondName: {
    type: String,
  },
  firstLastname: {
    required: true,
    type: String,
  },
  secondLastname: {
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  prefix: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  cellphone: {
    type: String,
  },
  extension: {
    type: Number,
  },
  tag: {
    type: String,
  },
});

module.exports = mongoose.model("contact", mySchema);
