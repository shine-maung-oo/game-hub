import { useState, useEffect } from 'react';
import { Game, GameQueryParams } from '../types/GameTypes';
import GameServices from '../services/game-services';

const useGames = (
    gameQueryParams: GameQueryParams,
    deps?: any[]
) => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<String>("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        GameServices.getGamesData(gameQueryParams)
        .then(res => {
            setGames(res.data.results)
            setIsLoading(false)
        })
        .catch(error => setError(error.message))
    }, deps ? deps : [])

    return {games, error, isLoading}
}
 
export default useGames;