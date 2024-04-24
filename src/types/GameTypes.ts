import { Genre } from "./GenreTypes"
import { Platform } from "./PlatformTypes"

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform: Platform}[]
    metacritic: number
    rating_top: number
}

export interface GameQueryParams {
    genre: Genre | null,
    platform: Platform | null
    sort: String | null
    searchText: String | null
}