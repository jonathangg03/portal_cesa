const { nanoid } = require("nanoid");
const TABLE = "request";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE, "client");
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const upsert = (body, isNew) => {
    const request = {
      client: body.client,
      name: body.name,
      phone: body.phone,
      date: body.date,
      attendant: body.attendant,
      detail: body.detail,
      id: body.id || nanoid(),
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
