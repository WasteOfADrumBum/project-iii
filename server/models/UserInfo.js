const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// Below will be the schema for our Workout Object
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "Please fill your first name",
  },

  lastName: {
    type: String,
    required: "Please fill your last name",
  },

  email: {
    type: String,
    required: "Please fill your email",
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, " Please provide a valid email"],
  },
  password: {
    type: String,
    required: "Please fill your password",
    minLength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: "Please fill your password confirm",
    validate: {
      validator: function (el) {
        // "this" works only on create and save
        return el === this.password;
      },
      message: "Your password and confirmation password are not the same",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  joinDate: {
    type: Date,
    default: () => new Date(),
  },

  vehicles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VehicleInfo",
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

// Make First and Last name CamelCase
UserSchema.methods.forceUpperFirst = function () {
  this.firstName = this.firstName.charAt(0).toUpperCase();
  return this.firstName;
};

UserSchema.methods.forceUpperLast = function () {
  this.lastName = this.lastName.charAt(0).toUpperCase();
  return this.lastName;
};

// encrypt the password using 'bcryptjs'
// Mongoose -> Document Middleware
UserSchema.pre("save", async function (next) {
  // check the password if it is modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hashing the password
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// This is Instance Method that is gonna be available on all documents in a certain collection
UserSchema.methods.correctPassword = async function (
  typedPassword,
  originalPassword
) {
  return await bcrypt.compare(typedPassword, originalPassword);
};

const UserInfo = mongoose.model("UserInfo", UserSchema, "UserInfo");
module.exports = UserInfo;
