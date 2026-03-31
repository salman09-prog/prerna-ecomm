import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://prerna-ecomm.onrender.com/api",
  withCredentials: true, // 🔥 REQUIRED if using cookies/auth
});

export default axiosInstance;