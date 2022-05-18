const express = require("express");
const compression = require("compression");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const articleRouter = require("./routes/article");
const userRouter = require("./routes/user");
const reviewRouter = require("./routes/reviews");
const tourguideRouter = require("./routes/tourguide");

app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", articleRouter);
app.use("/", userRouter);
app.use("/", reviewRouter);
app.use("/", tourguideRouter);

const uri = `mongodb+srv://Pranesh:${process.env.password}@cluster0.awm0l.mongodb.net/hilltracts?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(PORT, () => {
    console.log(`server is runnit on ${PORT}`);
  });
});
