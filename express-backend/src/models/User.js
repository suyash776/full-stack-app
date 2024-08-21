const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  console.log(user)

  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      console.log(hash)

      user.setDataValue('password', hash)
    })
}

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword
      // beforeUpdate: hashPassword,
      // beforeSave: hashPassword

    }
  })
  User.prototype.comparePassword = function (password) {
    console.log(password, this.password)

    return bcrypt.compareAsync(password, this.password)
  }
  return User
}
