import { GameQueryParams } from "../types/GameTypes";
import apiClient from "./api-client";

export default class GameServices {
    public static getGamesData(gameQueryParams: GameQueryParams) {
        return apiClient.get("/games", 
            {params: {
                genres: gameQueryParams?.genre?.id,
                platforms: gameQueryParams?.platform?.id,
                ordering: gameQueryParams?.sort,
                search: gameQueryParams?.searchText
            }}
        )
    }
}