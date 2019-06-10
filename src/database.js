const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "missingperson"
});

connection.connect(function(err) {
  console.log("we are in here");
  if (err) console.log(err);
});

export default connection;
