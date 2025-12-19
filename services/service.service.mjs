import { DISTANCE } from "../config/env.mjs";
import {
  createServiceRepo,
  getAllServicesRepo,
  getServiceByIdRepo,
  getServiceByProfileRepo,
  getServiceByCategoryRepo,
  updateServiceRepo,
  deleteServiceRepo,
  getServiceByEmailRepo,
  getAllServicesWithoutLocationRepo,
  getServicesByLatLngAndCategoryRepo,
} from "../repositories/service.repo.mjs";

export const createService = async (data) => {
  return await createServiceRepo(data);
};

export const getServices = async (lat,lng) => {
  return await getAllServicesRepo(lat,lng);
};

export const getServicesByLatLngAndCategory = async (
  lat,
  lng,
  categoryName
) => {
  const distance = parseFloat(DISTANCE);
  return await getServicesByLatLngAndCategoryRepo(
    lat,
    lng,
    categoryName,
    distance
  );
};
export const getAllServices = async () => {

 return await getAllServicesWithoutLocationRepo();
};

export const getServiceById = async (id) => {
  return await getServiceByIdRepo(id);
};

export const getServicesByProfile = async (profileId) => {
  return await getServiceByProfileRepo(profileId);
};

export const getServicesByCategory = async (categoryId) => {
  return await getServiceByCategoryRepo(categoryId);
};

export const updateService = async (id, data) => {
  return await updateServiceRepo(id, data);
};

export const getServicesByEmail = async (email) => {
  return await getServiceByEmailRepo(email);
};


export const deleteService = async (id) => {
  return await deleteServiceRepo(id);
};
