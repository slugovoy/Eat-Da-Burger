// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
// Object for all functions.
 const burger = {
  //  Function to add to the table
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Function to add to the table
  insertOne: function (burger_name, cb) {
    orm.insertOne("burgers", "burger_name", burger_name, function (res) {
      cb(res);
    });
  },

  // Function to update status of elements on the table
  updateOne: function (condition, id, cb) {
    orm.updateOne("burgers", condition, id, function (res) {
      cb(res);
    });
  },
  // Function to delete elements from the table
  deleteOne: function(id, cb) {
    orm.deleteOne("burgers", id, cb);
  },
};

// Export the database functions for the controller 
module.exports = burger;
