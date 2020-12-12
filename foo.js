const burger = require("./models/burger");

// Find and log all cats
burger.selectAll(function (data) {
  console.table(data);
  // Delete cat with id of 1
  // orm.delete({ id: 1 }, function (err, data) {
  //   console.log(data);
  //   // Find and log all cats
  //   orm.all(function (data) {
  //     console.table(data);
  //   });
  // });
  burger.insertOne('Big King BURGER', function (err, data){
    console.log("Inserted");

    burger.selectAll(function(data) {
      console.table(data);
    });
  });
  burger.updateOne(true, 36, function (err, data){
    console.log("Updated");

    burger.selectAll(function(data) {
      console.table(data);
    });
  });
});
