const mysql = require("mysql2");

module.exports = mysql
  .createPool({
    host: "localhost", // HOST NAME
    user: "root", // USERNAME
    password: "", // PASSWORD
    database: "company", // DATABASE NAME
  })
  .promise();
