const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/auth", isAuth, function(req, res){
    res.send(200)
})

app.post("/auth", loginUser, function (req, res) {
  console.log("In CALL");
  res.json({ token: req.token });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const index = require("./index")

index.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});

const jwt = require("jsonwebtoken");
function loginUser(req, res, next) {
  console.log("In MID");
  // search db for user with matching email
  // compare submitted password with saved password
  // if no matching send failure response

  try {
    if (req.body.email !== "bob") {
      throw "No user found";
    }
    if (req.body.password !== "dylan") {
      throw "Password incorrect";
    }

    req.token = jwt.sign(
      {
        email: req.body.email,
      },
      "fraggle_rock",
      { expiresIn: "1d" }
    );

    next();
  } catch (error) {
    res.status(404).send(error.message);
  }
}
function tokenFromHeader(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  )
    return req.headers.authorization.split(" ")[1] || false;
};
function isAuth(req, res, next) {
  if (tokenFromHeader(req)) {
    req.token = jwt.verify(tokenFromHeader(req), "fraggle_rock");
    return next();
  }
  res.status(404).send("NO");
}
