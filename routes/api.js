const router = require("express").Router();
const db = require("./libs/db");

// GET API HOME PAGE
router.get("/", (req, res) => {
  res.send({ msg: "Welcome to Express API." });
});

// C = Create
router.post("/create-employee", async (req, res) => {
  const { name, date } = req.body;
  try {
    await db.execute("INSERT INTO employees VALUE (NULL, ?, ?)", [name, date]);

    res.send({ msg: "Insert successfully." });
  } catch (err) {
    console.error(err);
    res.send({ msg: "Insert failed." });
  }
});

// R = Read
router.get("/all-employees", async (req, res) => {
  try {
    const [records] = await db.execute("SELECT * FROM employees");

    res.send(records);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

// U = Update
router.post("/edit-employee", async (req, res) => {
  const { id, name, date } = req.body;
  try {
    await db.execute("UPDATE employees SET name=?, date=? WHERE id=?", [
      name,
      date,
      id,
    ]);

    res.send({ msg: "Updated." });
  } catch (err) {
    console.error(err);
    res.send({ msg: "Update failed." });
  }
});

// D = Delete
router.get("/remove-employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM employees WHERE id=?", [id]);

    res.send({ msg: "Deleted." });
  } catch (err) {
    console.error(err);
    res.send({ msg: "Delete failed." });
  }
});

module.exports = router;
