import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCTION_API,
});

export default axiosInstance;
