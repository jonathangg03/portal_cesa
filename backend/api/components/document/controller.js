const { nanoid } = require("nanoid");
const moment = require("moment");
const TABLE = "document";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE, "name");
  };

  const get = (id) => {
    return store.get(TABLE, id, "name");
  };

  const upsert = (body, file, isNew) => {
    const document = {
      id: body.id || nanoid(),
      name: body.name,
      size: file.size,
      date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
      user: "",
      archived: body.arcived || false,
      document: "http://localhost:3000/api/files/" + file.filename,
    };

    // console.log(req.file.buffer);

    return store.upsert(TABLE, document, isNew);
  };

  const deleted = (id) => {
    return store.deleted(TABLE, id);
  };

  return {
    list,
    get,
    upsert,
    deleted,
  };
};
