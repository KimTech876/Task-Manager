var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET all tasks */
router.get("/", async function (req, res, next) {
  try {
    const result = await db(
      `SELECT * FROM tasks;`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* Add new tasks*/
router.post("/", async function (req, res, next) {
  try {
    await db(
      `INSERT INTO tasks (task, isDone) VALUES ('${req.body.task}','${req.body.isDone}');`
    );
    const response = await db(`SELECT * FROM tasks;`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/* DELETE a task*/
router.delete("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    console.log(req.params)
    await db(`DELETE FROM tasks WHERE id = ${id} ;`);
    // Fetch the updated list/table
    const results = await db(`SELECT * from tasks;`);
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/* PUT users/profile */
router.put("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    await db(
      `UPDATE tasks SET isDone = !isDone WHERE id = ${id};`
    );
    // Fetch the updated task list
    const response = await db(
      `SELECT * from tasks;`
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
