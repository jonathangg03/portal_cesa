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

// const login = async (body) => {
//   const user = await store.query(TABLE, {
//     email: body.email,
//   });

//   console.log(user);
//   if (user) {
//     const areEqual = await bcrypt.compare(body.password, user.password);
//     console.log(areEqual);
//     if (areEqual) {
//       return auth.sign({ ...user });
//     } else {
//       throw new Error("Correo o contraseña invalidos");
//     }
//   } else {
//     throw new Error("Correo o contraseña invalidos");
//   }
// };

module.exports = {
  add,
  // login,
};
