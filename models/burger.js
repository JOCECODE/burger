const orm = require("../config/orm.js");

//! CREATE CODE THAT WILL CALL THE ORM functions
//! using burger specific input from the ORM.

let burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
      console.log(`burger.js line 10 ${res}`);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
      console.log(`burger.js line 16 ${res}`);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
