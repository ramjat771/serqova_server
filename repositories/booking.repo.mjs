import { COMMISSION } from "../config/env.mjs";
import Booking from "../models/booking.model.mjs";

// Create new booking
export const createBookingRepo = async (data) => {
  const booking = new Booking(data);
  return await booking.save();
};

// Get bookings by professional email
export const getBookingsByProfessionalRepo = async (professionalEmail) => {
  return await Booking.find({ professionalEmail }).sort({ createdAt: -1 });
};

// Get bookings by user email
export const getBookingsByUserRepo = async (userEmail) => {
  return await Booking.find({ userEmail }).sort({ createdAt: -1 });
};

// Get All bookings 
export const getAllBookingsRepo = async () => {
  return await Booking.find({  }).sort({ createdAt: -1 });
};
// Update booking status
export const updateBookingStatusRepo = async (bookingId, status) => {
  return await Booking.findByIdAndUpdate(bookingId, { orderStatus: status }, { new: true });
};


// Get bookings by professional email For Payment
// ✅ Corrected version
export const getBookingsByProfessionalRepoForPayment = async (professionalEmail) => {
  const bookings = await Booking.find(
    { professionalEmail, isPaid: false,orderStatus: "completed" },
    { price: 1, _id: 0 }
  );

  // Sum all prices
  const totalAmount = bookings.reduce((sum, b) => sum + (b.price || 0), 0);
const finalAmount = Math.round(totalAmount * parseFloat(COMMISSION));


  // Optional: return both details and total
  return {
    totalUnpaidAmount: finalAmount,
    count: bookings.length,
    bookings, // or remove if not needed
  };
};



