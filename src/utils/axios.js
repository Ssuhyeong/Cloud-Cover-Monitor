import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://15.165.203.129:3001",
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
