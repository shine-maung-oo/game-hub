import { useState, useEffect } from 'react';
import GenreService from '../services/genres-service';

const useGenres = () => {
    const [genres, setGenres] = useState([])    
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        GenreService.getGenresData()
        .then(res => {
            setGenres(res.data.results)
            setIsLoading(false)
        }).catch(error => {
            setError(error.message)
        })
    }, [])

    return {genres, error, isLoading}
}
 
export default useGenres;