const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

const jwt = require("jsonwebtoken");
const { registerRules, validation } = require("../middelwares/validator");
const isAuth = require("../middelwares/passport");

// get all users
router.get("/get", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});

//Put methode update user
router.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    );
    res.status(200).send({ newProfile: result, msg: "profile updated.." });
  } catch (error) {
    res.status(500).send("cannot update the profile..");
    console.log(error);
  }
});

// delete user

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    let result = await User.findOneAndRemove({
      _id: req.params.id,
    });

    res.send({ msg: "user deleted" });
  } catch (error) {
    res.status(500).send("cannot delete user..");
    console.log(error);
  }
});

module.exports = router;
