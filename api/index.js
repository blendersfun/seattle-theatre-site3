var express = require('express');

var app = express();
var test = require('./mysql-test');
 
app.get('/', function (req, res) {
    test(function (err, rows) {
        res.json(rows);
    });
});
 
app.listen(3000);
