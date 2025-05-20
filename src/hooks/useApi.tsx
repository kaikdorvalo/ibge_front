import axios from 'axios'

const baseApi = "https://servicodados.ibge.gov.br/api/v2/censos/nomes"

const api = axios.create({
    baseURL: baseApi,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const useApi = () => ({
    getNameRnaking: async (name: string) => {
        const ranking = await api.get(`/${name}`);
        return ranking;
    }
})