// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "jp1o85qmtrca074b",
  password: "ng44oemnnt2wup3n",
  database: "apvdvrsss3zg7i8o",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
