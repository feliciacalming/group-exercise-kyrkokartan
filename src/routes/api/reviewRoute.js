const express = require("express");
const {
  getAllReviews,
  getReviewById,
  createNewReview,
  updateReview,
  deleteReview,
} = require("../../controllers/reviewControllers");
const router = express.Router();

router.get("/", getAllReviews);

router.get("/:id/", getReviewById);
//churches/:churchId/reviews/:reviewId

router.post("/", createNewReview);

router.put("/:id/", updateReview);

router.delete("/:id/", deleteReview);

module.exports = router;
