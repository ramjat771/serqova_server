import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, trim: true },
    categoryCode: { type: String, required: true, unique: true, trim: true, uppercase: true },
    imgUrl: { type: String, trim: true },
    photo: { type: String, trim: true }, // optional: base64 ya CDN URL
    description: { type: String, trim: true },
        // 💰 Added price field
    price: { type: Number, required: false, min: 0, default: 0 },
  },
  
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
