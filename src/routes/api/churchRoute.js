const express = require("express");
const {
  getAllChurches,
  addNewChurch,
  getChurchById,
  deleteChurch,
  updateChurch,
} = require("../../controllers/churchControllers");
const router = express.Router();

router.get("/", getAllChurches); 

router.get("/:id", getChurchById);  

router.post("/", addNewChurch);

router.put("/:id", updateChurch);

router.delete("/:id", deleteChurch);

module.exports = router;
