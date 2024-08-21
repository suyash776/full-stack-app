const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationController')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )
  app.get('/songs',
    SongsController.getAll
  )
  app.get('/songs/:id',
    SongsController.getSong
  )
  app.post('/songs',
    SongsController.create
  )
}
