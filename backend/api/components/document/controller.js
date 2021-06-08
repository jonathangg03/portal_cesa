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

  const upsert = (body, req, isNew) => {
    const document = {
      id: body.id || nanoid(),
      name: body.name,
      size: req.file.size,
      date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
      user: "",
      archived: body.arcived || false,
      document: req.file.buffer,
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
