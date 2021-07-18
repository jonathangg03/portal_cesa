const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  _id: {
    required: true,
    type: Schema.ObjectId,
  },
});

module.exports = mongoose.model("auth", mySchema);
