const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.mesage });
  }
});

router.post("/", async (req, res) => {
  const {name, email, password} = req.body;
  console.log(name, email, password);
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  try {
    const user = new User({ name, email, password});
    await user.save();
    console.log('user creado =>', user)
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json ({message: error.message});
  }
});

module.exports=router;