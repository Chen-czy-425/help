import { http } from "../common/request";
import { ApiResponse } from "./type";
export function getHomeData() {
    return http.get<ApiResponse>("/service/doc");
}
