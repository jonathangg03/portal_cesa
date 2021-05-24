const express = require("express");
const cors = require("cors");
const config = require("../config");
const contact = require("./components/contact/network");
const app = express();

//cors
app.use(cors());
app.use(express.json());
app.use("/api/contact", contact);

app.listen(config.api.port, () =>
  console.log(
    `Escuchando API desde http://${config.api.host}:${config.api.port}`
  )
);
