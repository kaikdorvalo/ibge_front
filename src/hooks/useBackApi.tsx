import axios from 'axios'

const baseApi = "http://localhost:3000/"

const api = axios.create({
    baseURL: baseApi,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const useBackApi = () => ({
    getTopNames: async (location: number) => {
        const ufs = await api.get(`trend/top-names`, { params: { localidade: location } });
        return ufs;
    }
})