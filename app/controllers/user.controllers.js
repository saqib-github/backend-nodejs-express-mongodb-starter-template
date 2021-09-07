const db = require("../models");
const User = db.user;

exports.getUser = (req, res) => {
  try {
    let user = new User({
      first_name: "haider",
      last_name: "ali",
      address: "daska",
      email: "haider@mail.com",
    });
    user.sava();
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
  }
};
