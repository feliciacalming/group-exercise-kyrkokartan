const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  description: {
    type: String,
    minLength: 20,
    maxLength: 200,
  },
  //   reviews: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Review",
  //     },
  //   ],
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Church",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
