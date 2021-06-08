const { nanoid } = require("nanoid");
const TABLE = "contact";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE, "firstName");
  };

  const get = (id) => {
    return store.get(TABLE, id, "firstName");
  };

  const upsert = (body, isNew) => {
    const document = {
      id: body.id || nanoid(),
      name: body.name,
      size: body.size,
      date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
      user: body.user,
      archived: body.arcived || false,
    };

    console.log(body);

    //  return store.upsert(TABLE, document, isNew);
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
