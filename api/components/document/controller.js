const moment = require("moment");
const fs = require("fs");
const config = require("../../../config");
const Model = require("./model");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.key,
  api_secret: config.cloudinary.secret,
});

const list = async () => {
  return Model.find();
};

const get = async (id) => {
  return Model.findById(id);
};

const add = async (body, file) => {
  const upload = await cloudinary.v2.uploader.upload(file.path);
  const document = new Model({
    ...body,
    size: file.size,
    date: moment().format("DD/MM/YYYY - hh:mm:ssa"),
    archived: false,
    document: "/api/files/" + file.filename,
    filename: file.filename,
    uploadUrl: upload.url,
    public_id: upload.public_id,
  });

  await document.save();

  fs.unlink(`${__dirname}/uploads/${file.filename}`, (err) => {
    if (err) console.log(err);
    else console.log("Registro eliminado");
  });
  return "Documento agregado";
};

const update = async (body, id) => {
  const filter = await Model.findOneAndUpdate(
    { _id: id },
    { _id: id, ...body }
  );

  return filter;
};

const deleted = async (id) => {
  return Model.findByIdAndDelete(id)
    .then(async (data) => {
      await cloudinary.v2.uploader.destroy(data.public_id);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

module.exports = {
  list,
  get,
  add,
  update,
  deleted,
};
