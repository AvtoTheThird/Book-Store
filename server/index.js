const express = require("express");
const app = express();
const cors = require("cors");
const jtw = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(cors({ credentials: true, origin: "https://subtle-bunny-2f1d4c.netlify.app" }));
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const secret = "1sd5g8as33d5we1gsd56sdf1";

const UserModel = require("./models/User");
const bookModel = require("./models/Book");
mongoose.connect(
  "mongodb+srv://avtonariashvili:K7lEk6HgvC7M1Sbt@cluster0.pvsqwrq.mongodb.net/?retryWrites=true&w=majority"
);
app.get("/test", (req, res) => {
  res.json("okk");
});

app.post("/register", async (req, res) => {
  try {
    const user = req.body.data;

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

app.post("/CreateBook", async (req, res) => {
  try {
    const BookData = req.body;

    bookOwner = BookData.owner;
    const owner = await UserModel.findById(bookOwner);
    BookData.phone = owner.phone;
    const newBook = await new bookModel(BookData);
    await newBook.save();
    res.json("ok");
  } catch (error) {
    res
      .status(422)
      .json({ error: "Validation failed. Please enter valid data" });
    console.log(error);
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

  if (!token) return res.status(401).json("unauthorized");
  else {
    jtw.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  }
  // jtw.verify(token, secret, {}, (err, info) => {
  //   if (err) throw err;
  //   res.json(info);
  // });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.get("/getBooks", async (req, res) => {
  const PAGE_SIZE = 20; // Default number of items per page
  const page = parseInt(req.query.page || "0");
  const total = await bookModel.countDocuments({});
  const posts = await bookModel
    .find({})
    .populate("owner", "username")
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);

  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    posts,
  });
});
app.post("/getBooksByID", async (req, res) => {
  const id = req.body.owner._id;
  try {
    const foundBooks = await bookModel.find({ owner: id });
    res.json(foundBooks);
  } catch (error) {
    res.status(400).json(error);
  }
  // const foundBooks = await bookModel.find({ owner: id });
  // res.json(foundBooks);
  // res.json("okokok");
});
app.get("/usersBooks", async (req, res) => {
  const { token } = req.cookies;
  jtw.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    var id = info.id;
    const foundBooks = await bookModel.find({ owner: id });
    res.json(foundBooks);
  });
});

app.delete("/deleteBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await bookModel.findByIdAndDelete(id).exec();
    res.json("ok");
  } catch (error) {
    console.log(error);
    res.json("okn't");
  }
});

app.post("/search", async (req, res) => {
  const searchTerm = req.body.data;
  console.log(searchTerm);
  try {
    const searchResults = await bookModel.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: searchTerm, $options: "i" } },
            { author: { $regex: searchTerm, $options: "i" } },
          ],
        },
      },
    ]);

    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000);
