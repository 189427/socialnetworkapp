const { User, Thought } = require("../models");

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  },
};

module.exports = userController;
