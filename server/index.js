const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(cors());
const UserModel = require("./models/User");

mongoose.connect(
  "mongodb+srv://avtonariashvili:K7lEk6HgvC7M1Sbt@cluster0.pvsqwrq.mongodb.net/?retryWrites=true&w=majority"
);
app.get("/test", (req, res) => {
  res.json("okk");
});

app.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const newUser = await new UserModel(user);
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
});
app.listen(4000);
