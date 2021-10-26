const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')
const jwt = require('jsonwebtoken')
const controller = require('./controller')
const { secret } = require('../../../config')
const router = express.Router()
require('../../auth/basic')

router.get('/', async (req, res) => {
  const user = await controller.get(req.body.email)
  res.send(user)
})

router.post('/sign-in', async (req, res, next) => {
  passport.authenticate('basic-strategy', (error, user, info) => {
    try {
      if (error) {
        return next(error)
      }

      console.log(error)
      req.login(user, { session: false }, (err) => {
        if (err) {
          return next(err)
        }

        const payload = {
          email: user.email,
          sub: user._id
        }

        const token = jwt.sign(payload, secret, {
          expiresIn: '1h'
        })

        res.status(200).json({ token, user: { ...payload } })
      })
    } catch (error) {
      return next(error.message)
    }
  })(req, res, next)
})

router.post('/newUser', async (req, res) => {
  try {
    const newUser = await controller.add(req.body)
    if (newUser) {
      console.log(newUser)
      response.success(req, res, newUser, 201)
    }
  } catch (e) {
    response.error(req, res, error)
  }
})

module.exports = router
