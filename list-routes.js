const express      = require("express"),
  inMemoryDatabase = require("./in-memory-database"),
  router           = express.Router();

const tasksDb = inMemoryDatabase();

tasksDb.init([
  // { task: "anything dude" }
]);

router.get("/tasks", function(req, res){
  res.send(tasksDb.readAll());
});

router.post("/tasks", function(req, res){
  const task = req.body;
  tasksDb.create(task);
  res.status(201).send(task);
});

router.delete("/tasks/:id", function(req, res){
  const id = req.params.id;
  tasksDb.delete(id);
  res.send("Deleted.");
});

router.put("/tasks/:id", function(req, res) {
    const id = req.params.id;
    const task = req.body;
    tasksDb.update(id, task);
    res.status(201).send("updated");
});

module.exports = router;
