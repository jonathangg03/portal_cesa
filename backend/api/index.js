const express = require("express");
const config = require("../config");
const contact = require("./components/contact/network");
const app = express();

app.use(express.json());
app.use("/api/contact", contact);
app.use(
  "app/contact/new",
  express.static(__dirname + "../public/layout/contactos_agregar.html")
);

app.listen(config.api.port, () =>
  console.log(
    `Escuchando API desde http://${config.api.host}:${config.api.port}`
  )
);
