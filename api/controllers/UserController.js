



export function signup(req, res) {
  return User.mongoose.findOneAsync({ email: req.body.email })
  .then ( user => {
    const is = require('is_js')
    if (is.null(user)) {
      return User.mongoose(req.body).saveAsync()
      .then ( user => {
        const is = require('is_js')
        if (is.existy(user)) return res.json(user)
        else return res.json({})
      })

    } else return res.json({ text: 'User already exists in our records!'})
  })
  .catch ( error => {
    return res.serverError(error)
  })
}

export function login(req, res) {
  return User.mongoose.findOneAsync({ email: req.body.email })
  .then ( user => {
    const is = require('is_js')
    if (is.null(user)) return res.json({ text: 'Sorry, user does not exist in our records!' })
    else return res.json(user)
  })
  .catch ( error => {
    return res.serverError(error)
  })
}