var mysql = require('mysql');

module.exports = function (callback) {
    var connection = mysql.createConnection({
      host     : 'db',
      user     : 'seattle-theatre',
      password : 'seattle-theatre',
      database : 'seattle-theatre'
    });

    connection.connect();

    connection.query('select * from theatres', function(err, rows, fields) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });

    connection.end();
};
