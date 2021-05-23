const mysql = require("mysql");
const config = require("../config");
const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection;

const handleConnection = () => {
  connection = mysql.createConnection(dbConfig);

  connection.connect((error) => {
    if (error) {
      console.error(`[DB ERROR]: Error conectando con la DB: ${error.message}`);
      setTimeout(handleConnection, 2000);
    } else {
      console.log("Base de datos conectada");
    }
  });

  connection.on("error", (error) => {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("Base de datos desconectada. Reconectando...");
      handleConnection();
    } else {
      throw new Error(`[DB ERROR]: ${error.message}`);
    }
  });
};

handleConnection();

const list = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const insert = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (error, data) => {
      if (error) return reject(error);
      console.log(data);
      resolve("Datos ingresados");
    });
  });
};

const upsert = (table, data, isNew) => {
  if (isNew) {
    return insert(table, data);
  } else {
    console.log(editar);
  }
};

module.exports = {
  list,
  upsert,
};
