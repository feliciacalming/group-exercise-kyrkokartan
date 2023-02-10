const mongoose = require("mongoose");

const ChurchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 2,
    maxLength: 500,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  //   reviews: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Review",
  //     },
  //   ],
  // required: true,
});

module.exports = mongoose.model("Church", ChurchSchema);
