const bcrypt = require("bcrypt");
const Model = require("./model");
const auth = require("../../auth");

const add = async (email, password) => {
  const newPassword = await bcrypt.hash(password, 10);

  const auth = new Model({
    email,
    password: newPassword,
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
