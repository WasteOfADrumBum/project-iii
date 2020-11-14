const User = require("../models/UserInfo");
const Vehicle = require("../models/VehicleInfo")

module.exports = function () {
  return {

    // User Methods

    createUser: function(req, res) {
      User.create({})
      .then(newUser => {
        res.json(newUser)
      })
      .catch((err) => {
        res.json(err)
      })
    },

    findUser: function(req, res) {
      User.find()
      .then(foundUser => {
        res.json(foundUser);
      })
      .catch(err => {
        res.json(err)
      })
    },

    // Vehicle Methods

    findVehicle: function (req, res) {
      Vehicle.find({
        where: {
          make: req.params.make,
          model: req.params.model,
          year: req.params.year,
          engine: req.params.engine,
          transmission: req.params.transmission
        }
      }).then(foundVehicle => {
        res.json(foundVehicle)
      })
      .catch(err => {
        res.json(err)
      })

    }
  };
};
