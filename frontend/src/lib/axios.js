import axios from "axios";

const axiosInstance = axios.create({
    // It will look for VITE_API_URL in your Vercel settings or .env file
    baseURL: "https://prerna-ecomm-1.onrender.com/api"
})

export default axiosInstance;