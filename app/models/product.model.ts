import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  
  url: { type: String, required: true, unique: true },
  currency: { type: String, required: true },
  image: { type: String, required: true },
  moreimages:[{ type: [String], required: true }],
  title: { type: String, required: true },
  currentprice: { type: String, required: true },
  originalprice: { type: String, required: true },
  pricehistory: [
    {
      price: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
  lowestprice: { type: Number },
  highestprice: { type: Number },
  averageprice: { type: Number },
  description: { type: String },
  discountrate: { type: Number },
  category: { type: String },
  reviewscount: { type: Number },
  isoutofstock: { type: Boolean, default: false },
  users: [{ email: { type: String } }],
}, { timestamps: true });

 const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
 export default Product
