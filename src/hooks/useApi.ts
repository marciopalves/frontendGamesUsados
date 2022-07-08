import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const useApi = () => ({
    // validateToken: async (token: string) => {
    //     return {
    //         user: { id: 3, name: 'José', email: 'jose@gmail.com' }
    //     };
    //     const response = await api.post('/validate', { token });
    //     return response.data;
    // },
    
    signin: async (email: string, password: string) => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        const response = await api.post('auth', { email, password }, {headers});
        return response.data;
    },

    logout: async () => {
        return { status: true };
        // const response = await api.post('/logout');
        // return response.data;
    }
});