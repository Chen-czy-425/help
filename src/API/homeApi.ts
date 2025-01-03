
import axios, { AxiosResponse } from 'axios';

const M1_URL = 'https://www.ludashi.com/';

interface ApiResponse {
    data: any; // 根据你的API响应格式定义接口
    errno?: number;
    msg?: string;
}

export const HOME_API = async (): Promise<ApiResponse> => {
    try {
        const response: AxiosResponse<ApiResponse> = await axios.get(`${M1_URL}/service/doc`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the data!', error);
        throw error;
    }
};

// export const M1_API = async (docid:String): Promise<ApiResponse> => {
//     try {
//         const response: AxiosResponse<ApiResponse> = await axios.get(`${M1_URL}/service/docDetail?docid=${docid}`);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error fetching the data!', error);
//         throw error;
//     }
// };