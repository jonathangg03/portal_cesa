const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  client: {
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  attendant: {
    required: true,
    type: String,
  },
  detail: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("request", mySchema);
