import Data from "../models/data.model.mjs";

// Create
export const createDataRepo = async (data) => {
  return await Data.create(data);
};

// Get by idString
export const getByIdStringRepo = async (idString) => {
  return await Data.findOne({ idString });
};

// Get All
export const getAllDataRepo = async () => {
  return await Data.find().sort({ createdAt: -1 });
};

// Update Status Only
export const updateStatusRepo = async (idString, status) => {
  return await Data.findOneAndUpdate(
    { idString },
    { status },
    { new: true }
  );
};