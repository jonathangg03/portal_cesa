const moment = require("moment");
const fs = require("fs");
const config = require("../../../config");
const Model = require("./model");

const list = async () => {
  return Model.find();
};

const get = async (id) => {
  return Model.findById(id);
};

const add = async (body, file) => {
  const document = new Model({
    ...body,
    size: file.size,
    date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
    archived: false,
    document: `${config.apiUrl}/api/files/${file.filename}`,
    filename: file.filename,
  });

  return document.save();
};

const update = async (body, id) => {
  const filter = await Model.findOneAndUpdate(
    { _id: id },
    { _id: id, ...body }
  );

  return filter;
};

const deleted = async (id) => {
  Model.findByIdAndDelete(id)
    .then((data) => {
      fs.unlink(`${__dirname}/uploads/${data.filename}`, (err) => {
        if (err) console.log(err);
        else console.log("Registro eliminado");
      });
      return "Registro Eliminado";
    })
    .catch((error) => {
      throw Error(error);
    });
};

module.exports = {
  list,
  get,
  add,
  update,
  deleted,
};
