import * as bookingRepo from "../repositories/booking.repo.mjs";

export const createBooking = async (data) => {
  return await bookingRepo.createBookingRepo(data);
};

export const getBookingsByProfessional = async (professionalEmail) => {
  return await bookingRepo.getBookingsByProfessionalRepo(professionalEmail);
};

export const getBookingsByProfessionalForPaymentService = async (professionalEmail) => {
  return await bookingRepo.getBookingsByProfessionalRepoForPayment(professionalEmail);
};

export const getBookingsByUser = async (userEmail) => {
  return await bookingRepo.getBookingsByUserRepo(userEmail);
};

export const getAllBookingService = async () => {
  return await bookingRepo.getAllBookingsRepo();
};
export const updateBookingStatus = async (bookingId, status) => {
  return await bookingRepo.updateBookingStatusRepo(bookingId, status);
};
