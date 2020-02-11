import { myConfig } from "./config";
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const SELECT_ALL_PERSONS_QUERY =
  "SELECT * FROM namusmissings WHERE `State Of Last Contact`='TX'";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: SQL_KEY,
  database: "missingperson"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});
console.log(connection);
app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /persons to see missing people");
});

app.get("/persons", (req, res) => {
  3;
  connection.query(SELECT_ALL_PERSONS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.listen(4000, () => console.log(`sql server listening on port 4000`));
