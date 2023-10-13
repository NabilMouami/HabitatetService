const { getBoisDurs, createBoisDur, updateBoisDur, deleteBoisDur } = require("./bd.controller");

const router = require("express").Router();

router.get("/", getBoisDurs);
router.post("/", createBoisDur);
router.put("/", updateBoisDur);
router.delete("/:id", deleteBoisDur);
module.exports = router;