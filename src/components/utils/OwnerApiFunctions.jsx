import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function ownerRegistration(registration) {
  try {
    const response = await api.post(
      "/api/hotel-owner/auth/register",
      registration
    );
    return response.data;
  } catch (error) {
    if (error.reeponse && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`User registration error : ${error.message}`);
    }
  }
}

export async function getOwner(userId, token) {
  try {
    const response = await api.get(`/api/hotel-owner/auth/${userId}`, {
      headers: getHeader(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
