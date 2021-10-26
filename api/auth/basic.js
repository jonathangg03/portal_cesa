const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const bcrypt = require('bcryptjs')
const Users = require('../components/auth/model')

const Basic = new BasicStrategy(async (username, password, done) => {
  try {
    const user = await Users.findOne({ email: username })

    if (user.length < 0) {
      return done(null, false)
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return done(null, false)
    }

    delete user.password
    return done(null, user)
  } catch (error) {
    return done(error)
  }
})

passport.use('basic-strategy', Basic)
