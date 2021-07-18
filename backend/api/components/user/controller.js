const controller = require("../auth/controller");
const Model = require("./model");
const auth = require("../auth/network");

const list = async () => {
  return Model.find();
};

const get = async (id) => {
  return Model.findById(id);
};

const add = async (body) => {
  const newDocument = new Model({
    name: body.name,
    email: body.email,
  });

  controller
    .add({ email: body.email, password: body.password })
    .then((data) => data)
    .catch((err) => console.log("err: ", err.message));
  return newDocument.save();
};

module.exports = {
  list,
  get,
  add,
};
