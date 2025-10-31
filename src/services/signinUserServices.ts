import axiosInstance from "../utils/axios/axiosInstance";

export const signinUserServices = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/signin", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};