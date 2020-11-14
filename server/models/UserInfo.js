const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Below will be the schema for our Workout Object
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: "You must enter a first name",
  },

  lastName: {
    type: String,
    required: "You must enter a last name",
  },

  joinDate: {
    type: Date,
    default: () => new Date(),
  },

  eMail: {
    type: String,
    required: "You must enter an e-mail",
  },

  password: {
    type: String,
    required: "Please enter a password",
  },

  vehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: VehicleInfo
  },
  ],

  places: [
    {
      name: {
        type: String,
      },
      lat: {
        type: String,
      },
      lon: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: String,
      },
    },
  ],

  routes: [
    {
      carOnly: {
        distance: {
          type: Number,
        },
        time: {
          type: Number,
        },
        footprint: {
          type: Number,
        },
        created: {
          type: Date,
          default: () => new Date(),
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
      mixedMode: {
        distance: {
          type: Number,
        },
        time: {
          type: Number,
        },
        footprint: {
          type: Number,
        },
        created: {
          type: Date,
          default: () => new Date(),
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    },
  ],
});

UserSchema.methods.forceUpperFirst = function () {
  this.firstName = this.firstName.charAt(0).toUpperCase();
  return this.firstName;
};

UserSchema.methods.forceUpperLast = function () {
  this.lastName = this.lastName.charAt(0).toUpperCase();
  return this.lastName;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
