import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import { Params } from "../utils/params";
import { localStorageService } from "../services/local_storage.service";

//import * as process from "process";




export  class HttpClient {

    //private static readonly  baseUrl  = process.env.REACT_API_REMOTE_BASE_URL || process.env.REACT_API_LOCAL_BASE_URL;

    private static  client(): AxiosInstance {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: "http://192.168.43.66:8000/api",

        }
        let axiosInstance = axios.create(axiosConfig)
        axiosInstance.interceptors.request.use((config) => {
             const accessToken: string | null = localStorageService.getItem(Params.KEY_ACCESS_TOKEN)
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            if (config.headers['Content-Type'] === 'multipart/form-data') {
                config.headers['ContentType'] = 'multipart/form-data';
            }
             return config
            }, (error) => {
                return Promise.reject(error)
            }
        )
        return axiosInstance
    }
    public  static get(url: string): Promise<AxiosResponse>{
        return this.client().get(url);
    }
    public static post<T>(url: string, payload: T) : Promise<AxiosResponse>{
        console.log("here at axios");
        return this.client().post(url, payload);
    }
    public static put<T>(url: string, payload: T) : Promise<AxiosResponse>{
        return this.client().put(url, payload);
    }
    public static patch<T>(url: string, payload: T): Promise<AxiosResponse> {
        return this.client().patch(url, payload);
    }
    public static delete(url: string): Promise<AxiosResponse> {
        return this.client().delete(url);
    }

}
