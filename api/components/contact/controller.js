const Model = require("./model");

const list = async () => {
  return Model.find().sort({ firstName: 1 });
};

const get = (id) => {
  return Model.findById(id);
};

const add = async (body) => {
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
    tag: body.tag,
  };

  const newContact = new Model(contact);

  return newContact.save();
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
