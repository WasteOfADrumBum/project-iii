const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Below will be the schema for our Workout Object
const VehicleSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    make: {
        type: String,
        required: "Sorry, Make is required"
    },

    model: {
        type: String,
        required: "Sorry, Model is required"
    },

    year: {
        type: String,
        required: "Sorry, Year is required"
    },

    type: {
        type: String,
    },

    drive: {
        type: String,
    },

    trany: {
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

}, {
    toJSON: {
        virtuals: true
    }
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;