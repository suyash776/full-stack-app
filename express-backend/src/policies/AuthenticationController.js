const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(/[a-zA-Z0-9]{8,32}$/)
    })

    const { error } = schema.validate(req.body)
    // const schema = Joi.object({ name: Joi.string() .min(6) .required(),
    //   email: Joi.string() .min(6) .required() .email(),
    //   password: Joi.string() .min(6) .required() });

    //   const validation = schema.validate(req.body);
    //    res.send(validation);
    console.log('error', error)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:\n
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
