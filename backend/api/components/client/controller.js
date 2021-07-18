const moment = require("moment");
const model = require("./model");

const list = async () => {
  return model.find().sort({ name: 1 });
};

const get = async (id) => {
  return model.findById(id);
};

const add = async (body) => {
  const newClient = new model({
    ...body,
    date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
  });

  return newClient.save();
};

const update = async (body, id) => {
  const filter = await Model.findOneAndUpdate(
    { _id: id },
    { _id: id, ...body }
  );

  return filter;
};

const deleted = async (id) => {
  return model.findByIdAndDelete(id);
};

module.exports = {
  list,
  get,
  add,
  update,
  deleted,
};
