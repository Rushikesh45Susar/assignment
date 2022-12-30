
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "",
  database : "TicketBooking"
});
connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;