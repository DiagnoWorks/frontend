import axios from "axios";

/**
 * Axios instance with base URL and credentials configuration.
 * 
 * 📌 In development mode: Uses "http://localhost:8000/api/v1"
 * 📌 In production build: Uses "/api/v1"
 * 
 * Adjust the PORT_NUMBER if your backend runs on a different port.
 */

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8000/api/v1"
      : "/api/v1",
  withCredentials: true,
});
