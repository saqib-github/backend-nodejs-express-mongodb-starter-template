// sample model for the user's role
const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String,
  })
);

module.exports = Role;
