import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Injectable } from "@scandltd/vue-injector";

@Injectable({
  useFactory: () => axios.create()
})
abstract class Client {
  /** TODO: https://github.com/Scandltd/vue-injector/issues/51 */
  abstract get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
}

export default Client;
