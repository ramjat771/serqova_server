import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
   // profileId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },

    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    workType: { type: String, enum: ["Hourly bases", "Work bases"], required: true },
    serviceCharge: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    description: { type: String, trim: true },
     name: { type: String },
          phone: { type: String },

    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
     profile: { type: String },

    kycStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    // ✅ New field
    email: { 
      type: String, 
      required: true, 
      lowercase: true, 
      trim: true, 
    },
location: {
  type: {
    type: String,
    enum: ["Point"],
    default: "Point",
  
  },
  coordinates: {
    type: [Number],
    default: [0.0, 0.0], // default longitude & latitude
  
  }
},
  available:{type:String,default:"false"},
   deviceToken:{type:String}


  
  },
  
  { timestamps: true }
);
// ✅ Create geospatial index for nearby search
serviceSchema.index({ location: "2dsphere" });
const Service = mongoose.model("Service", serviceSchema);
export default Service;
