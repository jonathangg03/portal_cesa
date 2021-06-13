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

const list = (table, element) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} ORDER BY ${table}.${element} ASC`,
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
};

const get = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE id='${id}'`,
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
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

const update = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=?`,
      [data, data.id],
      (error, data) => {
        if (error) return reject(error);
        console.log(data);
        resolve("Datos actualizados");
      }
    );
  });
};

const upsert = (table, data, isNew) => {
  if (isNew) {
    return insert(table, data);
  } else {
    return update(table, data, isNew);
  }
};

const deleted = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${table} WHERE id='${id}'`, (error, data) => {
      if (error) return reject(error);
      console.log(data);
      resolve("Dato eliminado");
    });
  });
};

const query = (table, query) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, query, (error, data) => {
      if (error) return reject(error.message);
      resolve(data[0] || null);
    });
  });
};

module.exports = {
  list,
  get,
  upsert,
  deleted,
  query,
};
