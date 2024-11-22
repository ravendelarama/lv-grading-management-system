import { api } from "@/lib/api";
import { queryOptions } from "@tanstack/react-query";


export const usersQueryOptions = queryOptions({
    queryKey: ['users'],
    queryFn: async () => {
        try {
            const response = await api.users.get();

            return response.data
        } catch (e: any) {
            throw new Error(e.message ?? e.statusText)
        }
    }
})