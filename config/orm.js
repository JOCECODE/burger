const connection = require("../config/connection.js");

let orm = {
  all: function (tableInput, cb) {
    let allQuery = `SELECT * FROM ${tableInput};`;
    connection.query(allQuery, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, //COLS MUST HAVE A COMMA AFTER (BURGER_NAME, DEVOURED)
  create: function (table, cols, vals, cb) {
    let createQuery = `INSERT INTO ${table} (burger_name) VALUES ("${vals}");`;
    connection.query(createQuery, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log(`ORM.JS LINE 21 ${result}`);
    });
  },
  //   UPDATE employee SET role_id = ? WHERE employee_id = ?;
  update: function (table, objColVals, condition, cb) {
    console.log("---------------------------------------------");

    console.log(condition);
    let updateQuery = `UPDATE ${table} SET devoured = true WHERE ${condition};`;
    connection.query(updateQuery, function (err, result) {
      console.log(objColVals);
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
