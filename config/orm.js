const connection = require("../config/connection.js");

const orm = {
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
    let createQuery = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
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
    let updateQuery = `UPDATE ${table} SET ${objColVals} WHERE ${condition};`;
    connection.query(updateQuery, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
