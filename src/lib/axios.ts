import axios from "axios";
import { API_BASE_URL } from "../utils/constants/env";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export { axiosInstance };
