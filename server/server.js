const express = require("express");
const app = require('./app');
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!!! shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/project3_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB connection Successful");
  });

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
  console.log(".env.PORT:" + process.env.PORT)
});
