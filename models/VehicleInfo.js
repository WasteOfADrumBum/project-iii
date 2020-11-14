const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VehicleSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },

    make: {
      type: String,
      required: "Sorry, Make is required",
    },

    model: {
      type: String,
      required: "Sorry, Model is required",
    },

    year: {
      type: String,
      required: "Sorry, Year is required",
    },

    type: {
      type: String,
    },

    drive: {
      type: String,
    },

    transmission: {
      type: String,
    },

    cylinders: {
      type: String,
    },

    displacement: {
      type: String,
    },

    fueltype: {
      type: String,
    },

    mpgcity: {
      type: Number,
    },

    mpghwy: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;
