import * as userRepo from "../repositories/user.repo.mjs";

export const loginOrCreateUserService = async (email, password) => {
  const existingUser = await userRepo.getUserByEmailRepo(email);

  // CASE 1: User does not exist → Create user
  if (!existingUser) {
    const newUser = await userRepo.createUserRepo({ email, password });
    return {
      status: "created",
      user: newUser,
    };
  }

  // CASE 2: User exists → Check password
  if (existingUser.password !== password) {
    return {
      status: "wrong-password",
      user: null,
    };
  }

  // CASE 3: User exists + password correct
  return {
    status: "logged-in",
    user: existingUser,
  };
};
