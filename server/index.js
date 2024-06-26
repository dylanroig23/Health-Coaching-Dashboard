const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const sleepRouter = require("./routes/sleepRouter");
const usersRouter = require("./routes/usersRouter");
const stepsRouter = require("./routes/stepsRouter");
const zoneRouter = require("./routes/zoneRouter");
const sessionManagerRouter = require("./routes/sessionManagerRouter");
require("dotenv/config");

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB Database Connected!"))
  .catch((err) => console.log(err));

// Mount routers
app.use("/users", usersRouter);
app.use("/stepsData", stepsRouter);
app.use("/zoneData", zoneRouter);
app.use("/sleepData", sleepRouter);
app.use("/sessionManager", sessionManagerRouter);

// Start server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
