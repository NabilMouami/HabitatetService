const router = require("express").Router();
const {
  createCl,
  getCls,
  updateCl,
  deleteCl
} = require("./cl.controller");
router.get("/", getCls);
router.post("/", createCl);
router.put("/:id",  updateCl);
router.delete("/:id", deleteCl);

module.exports = router;