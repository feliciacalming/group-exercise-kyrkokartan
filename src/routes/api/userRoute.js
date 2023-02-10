const express = require("express");
const {
  getAllUsers,
  getUserById,
  addnewUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");
const router = express.Router();

router.get("/", getAllUsers); 

router.get("/:id", getUserById);

router.post("/", addnewUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
