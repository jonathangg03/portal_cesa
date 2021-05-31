const { nanoid } = require("nanoid");
const moment = require("moment");
const TABLE = "client";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE, "name");
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const upsert = (body, isNew) => {
    const request = {
      id: body.id || nanoid(),
      name: body.name,
      date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
      detail: body.detail,
    };

    return store.upsert(TABLE, request, isNew);
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
