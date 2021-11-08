const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
  },
  idType: {
    type: String,
    required: true,
    enum: ['CC', 'CE', 'PASSPORT']
  },
  idNumber: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v),
      message: (email) => `${email.value} is not a a valid email`,
    },
  },
  originCityCode: {
    type: Number,
    required: true,
  },
  destinationCityCode: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Credit Card', 'Debit Card', 'Apple Pay', 'Other'],
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  declaredValue: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: false
  },
  tax: {
    type: Number,
    required: false
  }
})

module.exports = mongoose.model('Quote', quoteSchema);
