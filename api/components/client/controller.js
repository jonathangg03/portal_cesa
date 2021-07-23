const moment = require("moment");
const Model = require("./model");

const list = async () => {
  return Model.find().sort({ name: 1 });
};

const get = async (id) => {
  return Model.findById(id);
};

const add = async (body) => {
  const newClient = new Model({
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
  return Model.findByIdAndDelete(id);
};

module.exports = {
  list,
  get,
  add,
  update,
  deleted,
};
