// require("dotenv").config();
module.exports = {
  api: {
    port: process.env.PORT,
  },
  db: {
    uri: process.env.DB_URI,
  },
  secret: process.env.SECRET,
  apiUri: "https://portal-cesa-api.herokuapp.com",
};
