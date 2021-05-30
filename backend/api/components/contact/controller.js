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
    const contact = {
      id: body.id || nanoid(),
      firstName: body.firstName,
      secondName: body.secondName,
      firstLastname: body.firstLastname,
      secondLastname: body.secondLastname,
      email: body.email,
      prefix: body.prefix,
      phone: body.phone,
      cellphone: body.cellphone,
      extension: body.extension,
      tag: body.tag || "",
    };

    return store.upsert(TABLE, contact, isNew);
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
