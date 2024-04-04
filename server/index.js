const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const sleepRouter = require("./routes/sleepRouter");
const usersRouter = require("./routes/usersRouter");
const cookieParser = require("cookie-parser");
require("dotenv/config");

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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

// Setup session middleware and sessionStore
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Mount routers
app.use("/sleepData", sleepRouter);
app.use("/users", usersRouter);

// Start server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
