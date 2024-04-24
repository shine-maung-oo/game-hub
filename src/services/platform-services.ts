import apiClient from "./api-client";

export default class PlatFormServices {
    public static getPlatformsData() {
        return apiClient.get('/platforms/lists/parents')
    }
}