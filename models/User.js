const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    isHero: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      default: "Leyte"
    },
    mobile: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
