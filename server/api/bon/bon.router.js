const router = require("express").Router();
const { createLivrClie, createEtranger, getBonLivrs, createBonClient, getBon, getNumBon } = require("./bon.controller");

router.get("/", getBonLivrs);
router.get("/:id", getBon);
router.get("/numbon/:id", getNumBon);
router.post("/bonlivr",createBonClient)
router.put("/livracc/:id",  createLivrClie);
router.patch("/:id",  createLivrClie);
router.post("/etranger",  createEtranger);
module.exports = router;