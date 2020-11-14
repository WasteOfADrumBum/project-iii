const router = require("express").Router();

module.exports = (db) => {

    const AppController = require("../controllers/AppController")(db);

    // GET Routes
    router.get("/userInfo", AppController.findUser);
    router.get("vehicleInfo", AppController.findVehicle);

    // POST Routes
    router.post("/userInfo", AppController.createUser);

    // PUT Routes


}