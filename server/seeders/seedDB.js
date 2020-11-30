const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/project3_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let userSeed = [
  {
    firstName: "Robert",
    lastName: "Jones",
    joinDate: new Date(Date.now()),
    email: "robert@gmail.com",
    password: "password1!",
    passwordConfirm: "password1!",
    role: "admin",
    active: true,
    // vehicles: vehicles.id
    vehicles: {
      make: "Alfa Romeo",
      model: "Spider Veloce 2000",
      year: 1984,
      type: "Two Seaters",
      drive: "",
      transmission: "Manual 5-spd",
      cylinders: 4,
      displacement: 2,
      fueltype: "Regular Gasoline",
      mpgcity: 18,
      mpghwy: 25,
    },
    places: [
      {
        name: "Home",
        lat: "35.7686092",
        lon: "-78.6369899",
        street: "803 S Blount St",
        city: "Raleigh",
        state: "NC",
        zip: "27601",
      },
      {
        name: "Work",
        lat: "35.7731053",
        lon: "-78.6411849",
        street: "500 S Salisbury St",
        city: "Raleigh",
        state: "NC",
        zip: "27601",
      },
    ],
    // TODO: +routes
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    joinDate: new Date(Date.now()),
    email: "sarah@gmail.com",
    password: "password1!",
    passwordConfirm: "password1!",
    role: "user",
    active: true,
    vehicles: {
      make: "Audi",
      model: "Quattro",
      year: 1984,
      type: "Subcompact Cars",
      drive: "",
      transmission: "Manual 5-spd",
      cylinders: 5,
      displacement: 2.1,
      fueltype: "Regular Gasoline",
      mpgcity: 14,
      mpghwy: 20,
    },
    places: [
      {
        name: "Home",
        lat: "35.7686092",
        lon: "-78.6369899",
        street: "803 S Blount St",
        city: "Raleigh",
        state: "NC",
        zip: "27601",
      },
      {
        name: "Work",
        lat: "35.7731053",
        lon: "-78.6411849",
        street: "500 S Salisbury St",
        city: "Raleigh",
        state: "NC",
        zip: "27601",
      },
    ],
    // TODO: +routes
  },
];

db.UserInfo.deleteMany({})
  .then(() =>
    // db.UserInfo.collection.insertMany(userSeed)
    userSeed
      .filter((u) => u.email)
      .map(async (user) => await db.UserInfo.create(user))
  )
  .then((users) => Promise.all(users))
  .then((data) => {
    console.log(data);
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
