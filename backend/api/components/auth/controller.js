const bcrypt = require("bcrypt");
const Model = require("./model");
const auth = require("../../auth");

const add = async (body, id) => {
  const newPassword = await bcrypt.hash(body.password, 10);

  const auth = new Model({
    email: body.email,
    password: newPassword,
    _id: id,
  });

  return auth.save();
};

const login = async (body) => {
  if (!body.email || !body.password) {
    throw Error("Debe ingresar un correo y un email");
  }

  const userFilter = await Model.find({
    email: body.email,
  });

  if (userFilter.length === 0) {
    throw Error("Correo o contraseña incorrectos");
  }

  const user = userFilter[0];
  const areEqual = await bcrypt.compare(body.password, user.password);
  if (areEqual) {
    return auth.sign({ ...user });
  } else {
    throw Error("Correo o contraseña incorrectos");
  }
};

module.exports = {
  add,
  login,
};
