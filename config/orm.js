// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: function (table, cb) {
    const query = `SELECT * FROM ??`;
    connection.query(query, [table], function (err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  insertOne: function (table, columnName, burger_name, cb) {
   const query = `INSERT INTO ?? (??) VALUES (?)`;

    connection.query(query,[table, columnName, burger_name], function (err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },
 
  updateOne: function (table, condition, id, cb) {
    
    const query = `UPDATE ?? SET devoured = ? WHERE id = ?`

    console.log(query);
    connection.query(query, [table, condition, id], function (err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },
 
};

// Export the orm object for the model (cat.js).
module.exports = orm;
