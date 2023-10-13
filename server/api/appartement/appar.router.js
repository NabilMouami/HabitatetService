const router = require("express").Router();
const {
  createAprt,
  getAprts,
  updateAprt,
  deleteAprt,
  venteAprt,
  getVentesAprts
} = require("./appar.controller");
router.post("/vente", venteAprt);
router.get("/ventes", getVentesAprts);
router.get("/", getAprts);
router.post("/", createAprt);
router.put("/:id",  updateAprt);
router.delete("/:id", deleteAprt);
module.exports = router;