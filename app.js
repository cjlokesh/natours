// 0. Get Express
const express = require("express");

// 1. Get the routes
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

// 2. Init application
const app = express();
app.use(express.json());

// 2.5 Custom Middele ware - just for completion
app.use((req, res, next) => {
  console.log("At custom middle ware");
  next();
});

// 3. Mounting the routes as Middle ware
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
