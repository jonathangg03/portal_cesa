// require("dotenv").config();
module.exports = {
  api: {
    port: process.env.PORT,
  },
  db: {
    uri: process.env.DB_URI,
  },
  secret: process.env.SECRET,
  apiUri: process.env.API_URI,
};
