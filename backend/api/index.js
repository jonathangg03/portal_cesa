const express = require("express");
const cors = require("cors");
const config = require("../config");
const contact = require("./components/contact/network");
const request = require("./components/request/network");
const client = require("./components/client/network");
const document = require("./components/document/network");
const app = express();

//cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/contact", contact);
app.use("/api/request", request);
app.use("/api/client", client);
app.use("/api/document", document);

app.listen(config.api.port, () =>
  console.log(
    `Escuchando API desde http://${config.api.host}:${config.api.port}`
  )
);
