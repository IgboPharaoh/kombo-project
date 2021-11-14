const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
// creating connection

const database = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "******",
  database: "kombo",
});

// connect
database.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("mysql is connected...");
});

const app = express();
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
  })
);

app.get("/getdb", function (req, res) {
    const searchText = req.query.q;

  let sql = "SELECT * FROM `cities` WHERE `name` LIKE ?";
  database.query(sql, [`${searchText}%`], function (err, result) {
    if (err) throw err;
    res.status(200).json({ data: result });
  });
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
