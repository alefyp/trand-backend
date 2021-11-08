const mongoose = require('mongoose');
const options = require('../config/dev');

module.exports = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}