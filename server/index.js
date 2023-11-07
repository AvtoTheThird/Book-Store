const express = require("express");
const app = express();
const cors = require("cors");
const jtw = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const secret = "1sd5g8as33d5we1gsd56sdf1";

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
    const newUser = await new UserModel({
      username: user.username,
      password: bcrypt.hashSync(user.password, salt),
      phone: user.phone,
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await UserModel.findOne({ username });
    const passOK = bcrypt.compareSync(password, userDoc.password);

    if (passOK) {
      jtw.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      });
    } else res.status(400).json("wrong credentials");
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jtw.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000);
