import { AxiosRequestConfig } from "axios";
import { service } from "../../api/common/server";

/* 导出封装的请求方法 */
export const http = {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.get(url, config);
    },
};
