const router = require("express").Router();
const AppController = require("../controllers/AppController");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const User = require("../models/UserInfo");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);
router.get("/protect", AuthController.protect);

// Protect all routes after this middleware
router.use(AuthController.protect);

// DELETE Routes
router.delete("/deleteMe", UserController.deleteMe);

// Only admin have permission to access for the below APIs
// router.use(AuthController.restrictTo("admin"));

//. Get All Users
router.route("/").get(UserController.getAllUsers);

// GET Routes
router.get("/UserInfo", AppController.findUser);
router.get("/vehicleInfo", AppController.findVehicle);

// POST Routes
router.post("/UserInfo", AppController.createUser);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

// Export router
module.exports = router;
