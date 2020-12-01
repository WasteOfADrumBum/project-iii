const router = require("express").Router();
const AppController = require("../controllers/AppController");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/userController");
const User = require("../models/UserInfo");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);

// ↓↓↓ Protect all routes after this middleware ↓↓↓
router.use(AuthController.protect);

// GET Routes: FIND
router.get("/jwt", AppController.findByJwt);
router.get("/UserInfo", AppController.findUser);
router.get("/VehicleInfo", AppController.findVehicle);
router.get("/jwt", AppController.findByJwt);

// POST Routes: CREATE
router.post("/UserInfo", AppController.createUser);

// DELETE Routes
router.delete("/", UserController.deleteVehicle);
router.delete("/", UserController.deletePlace);
router.delete("/deleteMe", UserController.deleteMe);


// ↓↓↓ Only admin have permission to access for the below APIs ↓↓↓
router.use(AuthController.restrictTo("admin", "user"));

//. Get All Users
router.route("/").get(UserController.getAllUsers);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

router
  .route("/updatePlaces/:id")
  .patch(UserController.updatePlaces)

// Export router
module.exports = router;