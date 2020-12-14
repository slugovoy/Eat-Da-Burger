// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  // Function to select all data from table
  selectAll: function (table, cb) {
    const query = `SELECT * FROM ??`;
    connection.query(query, [table], function (err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  // Function to add to the table
  insertOne: function (table, columnName, burger_name, cb) {
    const query = `INSERT INTO ?? (??) VALUES (?)`;

    connection.query(
      query,
      [table, columnName, burger_name],
      function (err, data) {
        if (err) {
          throw err;
        }

        cb(data);
      }
    );
  },
// Function to update status of elements on the table
  updateOne: function (table, condition, id, cb) {
    const query = `UPDATE ?? SET devoured = ? WHERE id = ?`;

    connection.query(query, [table, condition, id], function (err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },
// Function to delete elements from the table
  deleteOne: function (table, id, cb) {
    const query = `DELETE FROM ?? WHERE id = ?`;
    connection.query(query, [table, id], cb);
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
