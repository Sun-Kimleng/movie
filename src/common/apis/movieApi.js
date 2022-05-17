import axios, { Axios } from "axios";

export const movieUrl= 'https://www.omdbapi.com';

export default axios.create({
    baseURL: 'https://www.omdbapi.com',
});