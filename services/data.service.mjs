import { CustomError } from "../utils/custom_error.mjs";
import * as dataRepo from "../repositories/data.repo.mjs";

// Create or Update
export const createOrUpdateDataService = async (payload) => {
  const { idString, value, status, ownerId, token } = payload;

  const existing = await dataRepo.getByIdStringRepo(idString);

  if (existing) {
    existing.value = value;
    existing.status = status;
    existing.ownerId = ownerId;
    existing.token = token;

    await existing.save();

    return {
      status: "updated",
      data: existing,
    };
  }

  const newData = await dataRepo.createDataRepo(payload);

  return {
    status: "created",
    data: newData,
  };
};

// Get All
export const getAllDataService = async () => {
  const data = await dataRepo.getAllDataRepo();

  return {
    status: "success",
    data,
  };
};

// Get By idString
export const getDataByIdStringService = async (idString) => {
  const data = await dataRepo.getByIdStringRepo(idString);

  if (!data) {
    throw new CustomError("Data not found", 404);
  }

  return {
    status: "success",
    data,
  };
};

// PATCH → Update Status Only
export const updateStatusService = async (idString, status) => {
  const updated = await dataRepo.updateStatusRepo(idString, status);

  if (!updated) {
    throw new CustomError("Data not found", 404);
  }

  return {
    status: "status updated",
    data: updated,
  };
};