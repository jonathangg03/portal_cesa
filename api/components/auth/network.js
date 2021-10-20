const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')
const jwt = require('jsonwebtoken')
const controller = require('./controller')
const { secret } = require('../../../config')
const router = express.Router()
require('../../auth/basic')

router.post('/', (req, res, next) => {
  try {
    passport.authenticate('basic-strategy', (error, user, info) => {
      if (error) {
        response.error(req, res, error)
        next(error)
      }

      if (info) {
        response.error(req, res, info.message, info.message)
        next(info.message)
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          next(err)
        }

        const payload = {
          email: user.email,
          sub: user._id
        }

        response.success(
          req,
          res,
          {
            token: jwt.sign(payload, secret, {
              expiresIn: '1h'
            }),
            user: user
          },
          200
        )
      })
    })(req, res, next)
  } catch (error) {
    response.error(req, res, error)
  }
})

module.exports = router
