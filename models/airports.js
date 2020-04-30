'use strict';

const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String
    },
    country: {
      type: String
    }
  },
  {
    timestamps : true
  }
)

module.exports = mongoose.model('Airport', AirportSchema);