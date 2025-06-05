import axios from "axios";

const api = axios.create({
  baseURL: "https://econova-6y29.onrender.com/api", // Replace with your actual base URL
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("session"))?.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
