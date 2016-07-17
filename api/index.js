var express = require('express');
var cors = require('cors');

var app = express();
var test = require('./mysql-test');

app.use(cors());
 
app.get('/', function (req, res) {
    test(function (err, rows) {
        res.json(rows);
    });
});
 
app.listen(3000);
