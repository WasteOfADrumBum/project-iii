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
    // vehicles: vehicles.id
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    joinDate: new Date(Date.now()),
    email: "sarah@gmail.com",
    password: "password1!",
    passwordConfirm: "password1!",
    // vehicles: vehicles.id
  },
];

db.UserInfo.deleteMany({})
  .then(() =>
    // db.UserInfo.collection.insertMany(userSeed)
    userSeed.filter(u => u.email).map(async (user) => await db.UserInfo.create(user))
  )
  .then(users => Promise.all(users))
  .then((data) => {
    console.log(data)
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
