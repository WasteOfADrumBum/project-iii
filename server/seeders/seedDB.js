const mongoose = require("mongoose");
const db = require("../models/");

mongoose.connect("mongodb://localhost/project3_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let userSeed = [
  {
    firstName : "Robert",
    lastName : "Jones",
    joinDate: new Date(Date.now()),
    eMail: "robert@mail.com",
    password: "password",
    // vehicles: vehicles.id
  },
  {
    firstName : "Sarah",
    lastName : "Smith",
    joinDate: new Date (Date.now()),
    eMail: "Sarah@mail.com",
    password: "password",
    // vehicles: vehicles.id
  },
];

db.UserInfo
  .remove({})
  .then(() => db.UserInfo.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
