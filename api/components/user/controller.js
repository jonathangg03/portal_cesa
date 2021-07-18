const Model = require("./model");

const list = async () => {
  return Model.find();
};

const get = async (id) => {
  return Model.findById(id);
};

const add = async (body, id) => {
  const existUsers = await Model.find({
    email: body.email,
  });

  if (existUsers.length > 0) {
    throw Error("Ya existe un usuario con ese email");
  }

  const newDocument = new Model({
    name: body.name,
    email: body.email,
  });
  return newDocument.save();
};

module.exports = {
  list,
  get,
  add,
};
