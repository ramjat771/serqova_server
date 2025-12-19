import * as bookingService from "../services/booking.service.mjs";
import { successResponse } from "../utils/api_response.mjs";

export const createBookingController = async (req, res, next) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    return successResponse(res, booking, "Booking created successfully");
  } catch (err) {
    next(err);
  }
};

export const getBookingsByProfessionalController = async (req, res, next) => {
  try {
    const { professionalEmail } = req.params;
    const bookings = await bookingService.getBookingsByProfessional(professionalEmail);
    return successResponse(res, bookings, "Bookings fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const getBookingsByUserController = async (req, res, next) => {
  try {
    const { userEmail } = req.params;
    const bookings = await bookingService.getBookingsByUser(userEmail);
    return successResponse(res, bookings, "Bookings fetched successfully");
  } catch (err) {
    next(err);
  }
};


export const getAllBookingController = async (req, res, next) => {
  try {
  
    const bookings = await bookingService.getAllBookingService();
    return successResponse(res, bookings, "Bookings fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const updateBookingStatusController = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;
    const updatedBooking = await bookingService.updateBookingStatus(bookingId, status);
    return successResponse(res, updatedBooking, "Booking status updated");
  } catch (err) {
    next(err);
  }
};
