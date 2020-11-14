const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../models/UserInfo.js');
const AppError = require('../utils/appError');

// app.get("/auth", isAuth, function(req, res){
//   res.send(200)
// })

// app.post("/auth", loginUser, function (req, res) {
// console.log("In CALL");
// res.json({ token: req.token });
// });

const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res, next) => {
  console.log("In MID");
  // search db for user with matching email
  // compare submitted password with saved password
  // if no matching send failure response
    try {
      const {
        email, password
      } = req.body;
    

    // 1) check email and password
    if (!email || !password) {
      return next(new AppError(404, 'fail', 'Please provide email or password'), req, res, next);
    }

    // 2) check if user exists and password is correct
    const user = await User.findOne({
      email
    }).select('+password');

    if (!user || !await user.correctPassword(password, user.password)) {
      return next(new AppError(401, 'fail', 'Email or Password is incorrect'), req, res, next);
    }

    // 3) All corecct, send jwt to client
    const token = createToken(user.id);

    user.password = undefined;

    res.status(200).json({
      status: 'success',
      token,
      data: {
          user
      }
    });

  }catch (err) {
    next(err);
  }

};

  // try {
  //   if (req.body.email !== "bob") {
  //     throw "No user found";
  //   }
  //   if (req.body.password !== "dylan") {
  //     throw "Password incorrect";
  //   }

  //   req.token = jwt.sign(
  //     {
  //       email: req.body.email,
  //     },
  //     "fraggle_rock",
  //     { expiresIn: "1d" }
  //   );

  //   next();
  // } catch (error) {
  //   res.status(404).send(error.message);
  // }
  // };

exports.signup = async (req, res, next) => {
  try {
      const user = await User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          joinDate: req.body.joinDate,
          email: req.body.eMail,
          password: req.body.password,
      });

      const token = createToken(user.id);

      user.password = undefined;

      res.status(201).json({
          status: 'success',
          token,
          data: {
              user
          }
      });

  } catch (err) {
      next(err);
  }

};

exports.protect = async (req, res, next) => {
  try {
      // 1) check if the token is there
      let token;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
          token = req.headers.authorization.split(' ')[1];
      }
      if (!token) {
          return next(new AppError(401, 'fail', 'You are not logged in! Please login in to continue'), req, res, next);
      }


      // 2) Verify token 
      const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

      // 3) check if the user is exist (not deleted)
      const user = await User.findById(decode.id);
      if (!user) {
          return next(new AppError(401, 'fail', 'This user is no longer exist'), req, res, next);
      }

      req.user = user;
      next();

  } catch (err) {
      next(err);
  }
};

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
