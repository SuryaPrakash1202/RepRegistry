require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
//app.get("/", (req, res) => {res.send("hgjgujvhjb");});
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose.connect(
  "mongodb://127.0.0.1:27017/WorkOut?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection done...");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("listening on port",PORT);
});
