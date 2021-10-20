const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const bcrypt = require('bcrypt')
const user = require('../components/auth/controller')

const basic = new BasicStrategy(async (username, password, done) => {
  try {
    const userLogin = user.get(username)
    const areEqual = await bcrypt.compare(password, userLogin.password)

    if (!userLogin) {
      console.log('No se encontró un usuario con ese email')
      return done(null, false, { message: 'Usuario o contraseña incorrectos' })
    }

    if (!areEqual) {
      console.log('Contraseña incorrecta')
      return done(null, false, { message: 'Usuario o contraseña incorrectos' })
    }

    delete userLogin.password
    done(null, userLogin)
  } catch (error) {
    console.log('Error durante la validación')
    done(error)
  }
})

module.exports = passport.use('basic-strategy', basic)
