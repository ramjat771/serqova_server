import Service from "../models/service_model.mjs";
import { DISTANCE } from "../config/env.mjs";


export const getServicesByLatLngAndCategoryRepo = async (
  lat,
  lng,
  categoryName,
  distance
) => {
  const services = await Service.find({
    available: "true",
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: distance,
      },
    },
  })
    .populate({
      path: "category",
      match: { categoryName: categoryName }, // ✅ CORRECT FIELD
    })
    .sort({ createdAt: -1 });

  // ❗ populate match ke baad null categories remove karna zaroori hai
  return services.filter(service => service.category !== null);
};


export const createServiceRepo = async (data) => {
  const service = new Service(data);
  return await service.save();
};

export const getAllServicesRepo = async (lat,lng) => {
  
  const distance = parseFloat(DISTANCE); 
  return await Service.find({
     available: "true",
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [lng, lat] },
      $maxDistance: distance
    }
  }
})
    .populate("category")

    .sort({ createdAt: -1 });
};
export const getAllServicesWithoutLocationRepo = async () => {
  
  return await Service.find({})
    .populate("category")

    .sort({ createdAt: -1 });
};
export const getServiceByIdRepo = async (id) => {
  return await Service.findById(id).populate("category").populate("profileId");
};

export const getServiceByProfileRepo = async (profileId) => {
  return await Service.find().populate("category");
};

export const getServiceByCategoryRepo = async (categoryId) => {
  return await Service.find({ category: categoryId }).populate("category");
};

export const updateServiceRepo = async (id, data) => {
  return await Service.findByIdAndUpdate(id, data, { new: true });
};

export const getServiceByEmailRepo = async (email) => {
  return await Service.find({ email })
    .populate("category");
};


export const deleteServiceRepo = async (id) => {
  return await Service.findByIdAndDelete(id);
};
