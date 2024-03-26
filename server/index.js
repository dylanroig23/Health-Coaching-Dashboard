const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sleepRouter = require("./routes/sleepRouter");
const usersRouter = require("./routes/usersRouter");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/sleepData", sleepRouter);
app.use("/users", usersRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB Database Connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
