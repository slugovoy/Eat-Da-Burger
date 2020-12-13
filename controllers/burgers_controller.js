const burger = require("../models/burger.js");
const router = require("express").Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

  burger.selectAll(function (data) {
    const handlebarsObject = {
      burgers: data,
    };
    // res.json(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

router.post("/api/add-burgers", function (req, res) {

  const burger_name = req.body.burger_name;
  burger.insertOne(burger_name, function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    console.log("Burger Added!");
  });
});

router.put("/api/eat-burgers/:id", function (req, res) {
  
  const id = req.params.id;

  burger.updateOne(true, id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("Somebody ate your burger!");
    }
  });
});

router.delete("/api/delete-burgers/:id", function (req, res) {
  burger.deleteOne(req.params.id, function (err, data) {
    if (err) {
      res.status(500).end();
    } else if (data.affectedRows == 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
