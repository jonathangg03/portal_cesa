if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  api: {
    port: process.env.PORT
  },
  db: {
    uri: process.env.DB_URI
  },
  secret: process.env.SECRET,
  apiUrl: process.env.API_URL
}
