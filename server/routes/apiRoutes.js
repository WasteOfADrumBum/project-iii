const express = require('express');
const router = require("express").Router();
const AppController = require("../controllers/AppController")(db);
const AuthController = require('../controllers/AuthController');
const User = require('../models/UserInfo');


// GET Routes
router.get("/userInfo", AppController.findUser);
router.get("vehicleInfo", AppController.findVehicle);

// POST Routes
router.post("/userInfo", AppController.createUser);
router.post('/login', AuthController.loginUser);
router.post('/signup', AuthController.signup);

// PUT Routes


// USE Routes
router.use(AuthController.protect);

module.exports = router;