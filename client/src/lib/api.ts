import { User } from "@/types/api";
import axios from "axios";

const apiInstance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
})

export const api = {
    users: {
        get: () => {
            return apiInstance.get<Array<User>>('/users');
        }
    }
}

export type API = typeof api;