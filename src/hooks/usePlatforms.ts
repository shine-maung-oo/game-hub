import { useState, useEffect } from 'react';
import { Platform } from '../types/PlatformTypes';
import PlatFormServices from '../services/platform-services';

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        PlatFormServices.getPlatformsData()
        .then(res => {
            setPlatforms(res.data.results)
        }).catch(error => {
            setError(error)
        })
    }, [])

    return {platforms, error}
}
 
export default usePlatforms;