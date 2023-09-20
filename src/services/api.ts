import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEWS_BASE_URL,
    headers: {'X-api-key': process.env.NEWS_API_KEY}
});