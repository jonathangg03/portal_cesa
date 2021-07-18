const moment = require("moment");
const Model = require("./model");

const list = async () => {
  return Model.find().sort({ date: 1 });
};

const get = async (id) => {
  return Model.findById(id);
};

const add = async (body) => {
  const newRequest = new Model({
    date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
    ...body,
  });

  return newRequest.save();
};

const deleted = async (id) => {
  return Model.findByIdAndDelete(id);
};

const update = async (body, id) => {
  const filter = await Model.findOneAndUpdate(
    { _id: id },
    { _id: id, ...body }
  );

  return filter;
};

module.exports = {
  list,
  get,
  add,
  update,
  deleted,
};
