import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, trim: true },         // optional
    email: { type: String, required: true, trim: true, unique: true }, // required
    password: { type: String, trim: true },         // not encrypted, optional
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
