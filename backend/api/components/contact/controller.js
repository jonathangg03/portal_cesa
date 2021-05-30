const { nanoid } = require("nanoid");
const TABLE = "contact";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
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

  return {
    list,
    get,
    upsert,
  };
};
