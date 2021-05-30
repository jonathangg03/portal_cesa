const { nanoid } = require("nanoid");
const TABLE = "request";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE);
  };

  const upsert = (body, isNew) => {
    const request = {
      id: body.id || nanoid(),
      client: body.client,
      name: body.name,
      phone: body.phone,
      date: body.date,
      attendant: body.attendant,
      detail: body.detail,
    };

    return store.upsert(TABLE, request, isNew);
  };

  const deleted = (id) => {
    return store.delete(TABLE, id);
  };

  return {
    list,
    upsert,
    deleted,
  };
};
