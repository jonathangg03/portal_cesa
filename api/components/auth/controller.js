const bcrypt = require('bcryptjs')
const Model = require('./model')

const add = async (body) => {
  const newPassword = await bcrypt.hash(body.password, 10)

  const validation = await Model.findOne({ email: body.email })

  if (validation) {
    return new Error('Ya existe un usuario con ese email')
  }

  const auth = new Model({
    email: body.email,
    password: newPassword
  })

  return auth.save()
}

const get = async (email) => {
  const user = await Model.findOne({ email: email })

  return user
}

module.exports = {
  add,
  get
}
