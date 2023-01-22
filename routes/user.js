const express = require("express")
const router = express.Router()
const User = require("../models/User")

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ADD USER

router.post("/join", async (req, res) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    isHero: req.body.isHero,
    address: req.body.address
  })
  try {
    const newUser = await user.save()
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
