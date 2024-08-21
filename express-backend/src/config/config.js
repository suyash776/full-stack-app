module.exports = {
  port: process.env.PORT || 3000,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  db: {
    database: process.env.DB_NAME || 'db123',
    user: process.env.DB_USER || 'user123',
    password: process.env.DB_PASSWORD || 'password123',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      storage: './database.sqlite'
    }
  }
}
