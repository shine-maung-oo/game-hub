import apiClient from "./api-client";

export default class GenreService {
    public static getGenresData() {
        return apiClient.get('/genres')
    }
}