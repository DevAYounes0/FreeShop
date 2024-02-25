import mongoose from "mongoose";
const Users = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
module.exports = mongoose.models.Users || mongoose.model("Users", Users);
