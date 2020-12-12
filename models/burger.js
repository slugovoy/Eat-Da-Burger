// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (burger_name, cb) {
    orm.insertOne("burgers", "burger_name", burger_name, function (res) {
      cb(res);
    });
  },
  updateOne: function (condition, id, cb) {
    orm.updateOne("burgers", condition, id, function (res) {
      cb(res);
    });
  },
  delete(condition, cb) {
    orm.delete("cats", condition, cb);
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
