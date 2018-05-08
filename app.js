'use strict';

var express     = require('express');
var path        = require('path');
var http        = require('http');
var app         = express();
var routes      = require('./routes');
var bodyParser  = require('body-parser');


app.use((req, res, next) => {
    console.log('Custom Middleware');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello world from express by SON');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/hello', routes);
app.use('/public', express.static(path.join(__dirname, 'public')));

// http.createServer(app).listen(3000, function() {
//     console.log('Express started');
// });

app.listen(3000, () => {
    console.log('Express started');
});
