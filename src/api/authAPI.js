import axios from "axios";

export const registerUser = (data) => {
  return axiosInstance.post("/user/register", data);
};

export const loginUser = (data) => {
  return axiosInstance.post("/user/login", data);
};