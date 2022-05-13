const express = require("express");
const compression = require("compression");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const articleRouter = require("./routes/article");
const userRouter = require("./routes/user");
const reviewRouter = require("./routes/reviews");

app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", articleRouter);
app.use("/", userRouter);
app.use("/", reviewRouter);
mongoose.connect("mongodb://localhost:27017/hillTracts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(5000, () => {
    console.log("app is running on ports 5000");
  });
});
