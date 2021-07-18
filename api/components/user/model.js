const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("user", mySchema);
