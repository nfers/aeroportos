'use strict';

const express = require('express');
const kraken = require('kraken-js');
const db = require('./database/connection');
const cors = require('cors');
const bodyParser = require('body-parser');

var options, app, port;

port = (process.env.PORT || 3030),
options = {
    onconfig: function (config, next) {
        next(null, config);
    }
};

app = module.exports = express();

app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(kraken(options));

app.on('start', function () {
    console.log('Environment: %s', app.kraken.get('env:env'));
});

app.listen(port, function () {
    console.log('Listening Port: ', this.address().port);
    console.log('Server on. ');
});

