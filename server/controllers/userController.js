const User = require("../models/UserInfo");
const base = require("./baseController");

exports.deleteVehicle = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { vehicles: { _id: req.query.vehicle } }
    })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
}

exports.deletePlace = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { places: { _id: req.query.places } }
    })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
}

exports.deleteMe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      active: false,
    });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = base.getAll(User);
exports.getUser = base.getOne(User);
exports.updatePlaces = base.updateUserPlaces(User)
exports.updateVehicle = base.updateUserVehicle(User)

// Don't update password on this
exports.updateUser = base.updateOne(User);
exports.deleteUser = base.deleteOne(User);