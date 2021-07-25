const express = require("express");
const cors = require("cors");
const path = require("path");
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

app.set("port", config.api.port || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => res.send("Hello world"));
app.use("/api/contact", contact);
app.use("/api/request", request);
app.use("/api/client", client);
app.use("/api/document", document);
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use(
  "/api/files",
  express.static(path.join(__dirname, "api/components/document/uploads"))
);

app.listen(app.get("port"), () =>
  console.log(`Listen on port ${app.get("port")}`)
);
