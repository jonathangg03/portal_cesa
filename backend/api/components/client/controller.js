const moment = require("moment");
const model = require("./model");

const list = async () => {
  return model.find().sort({ name: 1 });
};

const get = async (id) => {
  return model.findById(id);
};

const upsert = async (body) => {
  const newClient = new model({
    name: body.name,
    date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
    detail: body.detail,
  });

  return newClient.save();
};

const deleted = async (id) => {
  return model.findByIdAndDelete(id);
};

module.exports = {
  list,
  get,
  upsert,
  deleted,
};
