const TABLE = "contact";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE);
  };

  const upsert = (body, isNew) => {
    const contact = {
      firstName: body.firstName,
      secondName: body.secondName,
      firstLastname: body.firstLastname,
      secondLastname: body.secondLastname,
      email: body.email,
      prefix: body.prefix,
      phone: body.phone,
      cellphone: body.cellphone,
      extension: body.extension,
      tags: body.tags,
    };

    return store.upsert(TABLE, contact, isNew);
  };

  return {
    list,
    upsert,
  };
};
