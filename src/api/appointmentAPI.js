import axiosInstance from "./axios";

export const createAppointment = (data) => {
  return axiosInstance.post("/appointment/createAppointment", data);
};

export const updateAppointmentStatusByDoctor = (id, data) => {
  return axiosInstance.patch(
    `/appointment/statusUpdateByDoctor/${id}`,
    data
  );
};

export const updateAppointment = (id, data) => {
  return axiosInstance.put(`/appointment/updateAppoint/${id}`, data);
};

export const deleteAppointment = (id) => {
  return axiosInstance.delete(`/appointment/deleteAppointment/${id}`);
};

export const getAppointmentsByUser = () => {
  return axiosInstance.get("/appointment/getAppointmentsByUser");
};

export const getAppointmentsOfDoctor = () => {
  return axiosInstance.get("/appointment/showAppointmentsOfDoctor");
};
