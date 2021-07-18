const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  detail: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("client", mySchema);
