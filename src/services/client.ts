import axios, { AxiosInstance } from "axios";
import { Injectable } from "@scandltd/vue-injector";

@Injectable({
  useFactory: () => axios.create()
})
class Client<T extends AxiosInstance, K extends keyof T> {
  [key: K]: T[K];
}

export default Client;
