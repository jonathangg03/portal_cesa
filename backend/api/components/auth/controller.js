const bcrypt = require("bcrypt");
const auth = require("../../auth");
const TABLE = "auth";

module.exports = (store) => {
  const upsert = async (body, isNew) => {
    const newPassword = await bcrypt.hash(body.password, 5);

    const auth = {
      id: body.id,
      email: body.email,
      password: newPassword,
    };
    return store.upsert(TABLE, auth, isNew);
  };

  const login = async (body) => {
    const user = await store.query(TABLE, {
      email: body.email,
    });

    console.log(user);
    if (user) {
      const areEqual = await bcrypt.compare(body.password, user.password);
      console.log(areEqual);
      if (areEqual) {
        return auth.sign({ ...user });
      } else {
        throw new Error("Correo o contraseña invalidos");
      }
    } else {
      throw new Error("Correo o contraseña invalidos");
    }
  };

  return {
    upsert,
    login,
  };
};
