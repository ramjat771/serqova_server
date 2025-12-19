import mongoose from "mongoose";

const withdrawalSchema = new mongoose.Schema(
  {
    professionalEmail: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
      enum: ["upi", "bank"],
      required: true,
    },

    // Optional details depending on method
    upiId: {
      type: String,
      trim: true,
    },
    bankAccount: {
      type: String,
      trim: true,
    },
    ifscCode: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["requested", "approved", "rejected", "completed"],
      default: "requested",
    },

    transactionId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Automatically create a transaction ID if not provided
withdrawalSchema.pre("save", function (next) {
  if (!this.transactionId) {
    this.transactionId = `WD-${Math.floor(100000 + Math.random() * 900000)}`;
  }
  next();
});

const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);
export default Withdrawal;
