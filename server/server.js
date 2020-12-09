const express = require("express");
const app = require("./app");
// REACT_APP_PORT=3001
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fetch = require("node-fetch")
dotenv.config();

console.log("API KEY: ", process.env.REACT_APP_GOOGLE_API)


process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Production vs development build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database Connection
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

  app.get("/api/search", async (req, res) => {
    try {

      const response = await fetch(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API}&libraries=places`);
      
      return res.json({
              success: true,
              results
            })
          } catch (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            })
          }
        })

// PORT
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
  console.log(".env.PORT:" + process.env.PORT);
});
