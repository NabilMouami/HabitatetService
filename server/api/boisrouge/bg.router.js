const { getBoisRouges, createBoisRouge, updateBoisRouge, deleteBoisRouge } = require("./bg.controller");

const router = require("express").Router();

router.get("/", getBoisRouges);
router.post("/", createBoisRouge);
router.put("/", updateBoisRouge);
router.delete("/:id", deleteBoisRouge);
module.exports = router;