const Review = require("../models/Review");

exports.getAllReviews = (req, res, next) => {
  return res.send("get all reviews!");
};

exports.getReviewById = (req, res, next) => { 
  return res.send("get review by ID!");
};

exports.createNewReview = (req, res, next) => {
  return res.send("create new review");
};

exports.updateReview = (req, res, next) => {
  return res.send("update review!");
};

exports.deleteReview = (req, res, next) => {
  return res.send("delete review!");
};
