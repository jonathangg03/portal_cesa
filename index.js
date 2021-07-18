const express = require("express");
const cors = require("cors");
const config = require("./config");
const contact = require("./api/components/contact/network");
const request = require("./api/components/request/network");
const client = require("./api/components/client/network");
const document = require("./api/components/document/network");
const user = require("./api/components/user/network");
const auth = require("./api/components/auth/network");
const db = require("./api/db");
const app = express();

db(config.db.uri);

//cors
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/contact", contact);
app.use("/api/request", request);
app.use("/api/client", client);
app.use("/api/document", document);
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use(
  "/api/files",
  express.static(__dirname + "/components/document/uploads")
);

app.listen(config.api.port, () =>
  console.log(`Listen on port ${config.api.port}`)
);
