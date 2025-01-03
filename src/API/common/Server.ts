import axios from "axios";
import type { AxiosInstance } from "axios";
export const service: AxiosInstance = axios.create({
    baseURL: "https://www.ludashi.com",
    timeout: 30000,
});
