const mongoose = require("mongoose");

const connect = (uri) => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log("DB connected")
  );
};

module.exports = connect;
