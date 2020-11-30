const User = require("../models/UserInfo");
const VehicleInfo = require("../models/VehicleInfo");
const Vehicle = require("../models/VehicleInfo");

module.exports = {
    // User Methods
    createUser: function (req, res) {
      User.create({})
        .then((newUser) => {
          res.json(newUser);
        })
        .catch((err) => {
          res.json(err);
        });
    },

    findUser: function (req, res) {
      User.find()
        .then((foundUser) => {
          res.json(foundUser);
        })
        .catch((err) => {
          res.json(err);
        });
    },

    findByJwt : function (req, res) {
      res.json(req.user);
    },

    findVehicle: function (req, res) {
      console.log('WE hit find vehicle!!', Vehicle)
      Vehicle.find({}).limit(100).then((foundVehicle) => {
        console.log('we found these thigns fro DB', foundVehicle)
          res.json(foundVehicle);
        })
        .catch((err) => {
          console.log('VEHICLE ERR!!!!', err)
          res.json(err);
        });
    },
}
