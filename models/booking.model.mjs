import mongoose from "mongoose";

// helper function to generate 5 digit random int
function generateOrderUuid() {
  return Math.floor(10000 + Math.random() * 90000); // ensures 10000–99999
}

const bookingSchema = new mongoose.Schema(
  {
    professionalEmail: { type: String, required: true, trim: true },
    professionalPhone: { type: String, trim: true },

    userEmail: { type: String, required: true, trim: true },
    userPhone: { type: String, required: true, trim: true },

    serviceName: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
     isPaid: { type: Boolean, default: false },

    orderStatus: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: undefined, // won't insert if not sent
    },

  orderUuid: {
  type: Number,
 
  default: () => Math.floor(10000 + Math.random() * 90000),
},

    lat: { type: Number },
    log: { type: Number },

    additionalNotes: { type: String },
  },
  { timestamps: true }
);

// fallback to "pending" if explicitly empty
bookingSchema.pre("save", function (next) {
  if (!this.orderUuid) {
    this.orderUuid = Math.floor(10000 + Math.random() * 90000);
  }
  if (!this.orderStatus) {
    this.orderStatus = "pending";
  }
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
