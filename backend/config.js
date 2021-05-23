module.exports = {
  api: {
    host: process.env.API_HOST || "localhost",
    port: process.env.API_PORT || 3000,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USERNAME || "9rr876KlLn",
    password: process.env.MYSQL_PASSWORD || "tCE8wcd5qR",
    database: process.env.MYSQL_DATABASE || "9rr876KlLn",
  },
};
