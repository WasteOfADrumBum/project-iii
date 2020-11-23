const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/UserInfo");
const AppError = require("../utils/appError");
require("dotenv").config();

const createToken = (id) => {
  // ! .env file requires REACT_APP_ prefix
  // ! .env MUST be located in the root directory
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 1) check if email and password exist
    if (!email || !password) {
      return next(
        new AppError(404, "fail", "Please provide email or password"),
        req,
        res,
        next
      );
    }
    console.log(
      "LOGIN | checked if email: " +
        email +
        " and password: " +
        password +
        " are valid."
    );

    // 2) check if user exist and password is correct
    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(
        new AppError(401, "fail", "Email or Password is wrong"),
        req,
        res,
        next
      );
    }
    console.log("LOGIN | User Exist & Password's Correct");

    // 3) All correct, send jwt to client
    const token = createToken(user.id);
    console.log("LOGIN | JWT → Client: Token Created");

    // Remove the password from the output
    user.password = undefined;
    console.log("LOGIN | Password Removed From Output");

    res.status(200).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    console.log("LOGIN | Error: ", err);
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });
    console.log("SIGNUP | Created User ", user.firstName, user.lastName);

    const token = createToken(user.id);
    console.log("SIGNUP | Token Created");

    user.password = undefined;
    console.log("SIGNUP | Password Removed From Output");

    res.status(201).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    console.log("SIGNUP | Error: ", err);
    next(err);
  }
};

exports.protect = async (req, res, next) => {
  try {
    // 1) check if the token is there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return next(
        new AppError(
          401,
          "fail from the protect fn",
          "You are not logged in! Please login in to continue"
        ),
        req,
        res,
        next
      );
    }
    console.log("PROTECT (token) | Checked For Token");

    // 2) Verify token
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log("PROTECT (decode) | Verified Token");

    // 3) check if the user is exist (not deleted)
    const user = await User.findById(decode.id);
    if (!user) {
      return next(
        new AppError(401, "fail", "This user is no longer exist"),
        req,
        res,
        next
      );
    }

    req.user = user;
    console.log("PROTECT (user) | Checked User is Valid");
    next();
  } catch (err) {
    console.log("Protect | Error: ", err);
    next(err);
  }
};

// Authorization check if the user have rights to do this action (ADMIN)
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      console.log("RESTRICT | User Doesn't Not Have Access!");
      return next(
        new AppError(403, "fail", "You are not allowed to do this action"),
        req,
        res,
        next
      );
    }
    next();
  };
};
