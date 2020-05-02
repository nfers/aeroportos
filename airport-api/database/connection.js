'use strict'

const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/db_airport', { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.Promise = global.Promise

console.log('banco de dados conectado')
module.exports = mongoose;