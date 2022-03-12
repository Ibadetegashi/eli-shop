import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const apiRequest = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 10 * 1000,
  headers,
});

export default apiRequest;
