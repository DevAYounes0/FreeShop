import mongoose from "mongoose";
const ShopModel = new mongoose.Schema({
  title: String,
  image: String,
  other: String,
  price: String,
  quantity: String,
});
module.exports =
  mongoose.models.shopmodel || mongoose.model("shopmodel", ShopModel);
