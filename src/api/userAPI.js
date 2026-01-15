import axiosInstance from "./axios";

export const applyForDoctor = (data) => {
  return axiosInstance.post("/doctor/applyForDoctor", data);
};

export const updateDoctorStatus = (doctorId, data) => {
  return axiosInstance.post(`/doctor/doctorStatus/${doctorId}`, data);
};

export const getMyDoctorApplication = () => {
  return axiosInstance.get("/doctor/my-application");
};

export const updateDoctor = (id, data) => {
  return axiosInstance.patch(`/doctor/update/${id}`, data);
};

export const deleteDoctor = (id) => {
  return axiosInstance.delete(`/doctor/delete/${id}`);
};
