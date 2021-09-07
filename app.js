const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const mongoose = require("mongoose");
require("dotenv/config");

// importing routes here
const userRoute = require("./app/routes/user.routes.js");

// creating app
const app = express();

// app middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// this will run when anyone request on app
app.get("/", (req, res) => {
  res.json({ message: "Welcome to starter template" });
});

// importing models
const db = require("./app/models");
const Role = db.Role;

// connecting to database
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully Connected to database");
    // initial();
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
    process.exit();
  });

// set port and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});

// routes middlewares'
app.use("api/user", userRoute);

// initial function callings
// basically this function for the creation roles of the user for the application
// if you need you can call it then skip it and remove it
// function initial() {
    
//   Role.CountDocuments((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
