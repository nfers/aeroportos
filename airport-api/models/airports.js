'use strict';

const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema(
  {
    qtdAeroportos: {
      type: Number,
      required: true,
    },
    largura: {
      type: Number,
      default: 10
    },
    altura: {
      type: Number,
      default: 10
    },
    qtdNuvens: {
      type: Number,
      default: 3
    },
    simulacao: {
      type: Array, 
    }
  },
  
  {
    timestamps : true
  }
)

module.exports = mongoose.model('Airport', AirportSchema);

