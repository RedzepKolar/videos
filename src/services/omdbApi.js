import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_OMDBAPI_URL,
});

export const fetchMovie = async (param,title) => {
    try {
        const response = await api.get(`?${param}=${title}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`);

        return response.data;
    } catch (error) {
        console.log("Error fetching movie title", error);
        throw error;
    }
}