require("dotenv").config();
module.exports = {
  api: {
    port: process.env.PORT,
  },
  db: {
    uri: process.env.DB_URI,
  },
  secret: process.env.SECRET,
  cloudinary: {
    key: process.env.CLOUDINARY_KEY,
    name: process.env.CLOUDINARY_NAME,
    secret: process.env.CLOUDINARY_SECRET,
  },
};
