import axios from 'axios'

const baseApi = "https://servicodados.ibge.gov.br/api/v1/localidades/"

const api = axios.create({
    baseURL: baseApi,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const useUFApi = () => ({
    getUFS: async () => {
        const ufs = await api.get('estados');
        return ufs;
    }
})