const { nanoid } = require("nanoid");
const controller = require("../auth/controller");
const TABLE = "user";
const auth = require("../auth/index");

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE, "name");
  };

  const get = (id) => {
    return store.get(TABLE, id, "name");
  };

  const upsert = (body, isNew) => {
    const document = {
      id: body.id || nanoid(),
      name: body.name,
      email: body.email,
    };

    auth.upsert({ ...document, password: body.password }, true);
    return store.upsert(TABLE, document, isNew);
  };

  return {
    list,
    get,
    upsert,
  };
};
