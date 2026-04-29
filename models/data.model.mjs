import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    idString: {
      type: String,
      required: true,
    },
    
    value: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    ownerId: {
      type: String,
      required: false,
    },

    token: {
      type: String,
      required: false,
    },

  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);
export default Data;