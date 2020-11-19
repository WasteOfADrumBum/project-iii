const router = require("express").Router();
const AppController = require("../controllers/AppController");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const User = require("../models/UserInfo");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);

// ↓↓↓ Protect all routes after this middleware ↓↓↓
router.use(AuthController.protect);

// GET Routes: FIND
router.get("/UserInfo", AppController.findUser);
router.get("/VehicleInfo", AppController.findVehicle);

// POST Routes: CREATE
router.post("/UserInfo", AppController.createUser);

// DELETE Routes
router.delete("/deleteMe", UserController.deleteMe);

// ↓↓↓ Only admin have permission to access for the below APIs ↓↓↓
router.use(AuthController.restrictTo("admin"));

//. Get All Users
router.route("/").get(UserController.getAllUsers);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

// Export router
module.exports = router;
