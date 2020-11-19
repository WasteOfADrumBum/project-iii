const router = require("express").Router();
const AdminController = require("../controllers/AdminController");
const UserController = require("../controllers/UserController");

// ↓↓↓ Only admin have permission to access for the below APIs ↓↓↓
router.use(AdminController.restrictTo("admin"));

//. Get All Users
router.route("/").get(UserController.getAllUsers);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

// Export router
module.exports = router;
