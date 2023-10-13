const router = require("express").Router();

const { createPann, deletePann, updatePann, getPanns } = require("./pann.controller");
router.get("/", getPanns);
router.post("/", createPann);
router.put("/", updatePann);
router.delete("/:id", deletePann);
module.exports = router;