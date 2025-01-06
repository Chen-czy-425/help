import { http } from "../common/request";
import { ApiResponse } from "../../types";
export function getHomeData() {
    return http.get<ApiResponse>("/service/doc");
}
