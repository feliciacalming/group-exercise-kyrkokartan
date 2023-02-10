require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const apiRoutes = require("./routes/api");
const userRoute = require("./routes/api/userRoute");
const churchRoute = require("./routes/api/churchRoute");
const reviewRoute = require("./routes/api/reviewRoute");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

// app.use("/api/v1", apiRoutes);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/churches", churchRoute);

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
