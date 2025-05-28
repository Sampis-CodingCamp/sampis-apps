require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sampis',
  jwtSecret: process.env.JWT_SECRET || 'sampiscihuyrawr',
  nodeEnv: process.env.NODE_ENV || 'development'
}; 