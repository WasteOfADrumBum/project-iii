const router = require("express").Router();
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);

// ↓↓↓ Protect all routes after this middleware ↓↓↓
router.use(AuthController.protect);

// ↓↓↓ Only admin have permission to access for the below APIs ↓↓↓
router.use(AuthController.restrictTo("user"));

// Export router
module.exports = router;
