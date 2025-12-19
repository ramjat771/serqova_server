import User from "../models/user.model.mjs";

// Create new user
export const createUserRepo = async (data) => {
  return await User.create(data);
};

// Get user by email
export const getUserByEmailRepo = async (email) => {
  return await User.findOne({ email });
};
