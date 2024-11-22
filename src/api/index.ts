import { ApiResponse, create } from "apisauce";

const api = create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

export { api };
