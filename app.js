'use strict';

var express = require('express');
var http    = require('http');
var app     = express();
var routes  = require('./routes');
var bodyParser = require('body-parser');

app.get('/', function(req, res) {
    res.send('Hello world from express by SON');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/hello', routes);


// http.createServer(app).listen(3000, function() {
//     console.log('Express started');
// });
app.listen(3000, function() {
    console.log('Express started');
});
