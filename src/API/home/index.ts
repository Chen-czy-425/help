import { http } from "../../api/common/request";
import { ApiResponse } from "../../types";
export function getHomeData() {
    return http.get<ApiResponse>("/service/doc");
}
