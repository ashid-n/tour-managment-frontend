import { useState, useEffect } from 'react';

const useFetch = (URL) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)

            try {
                const res = await fetch(URL)
                console.log('Fetching from:', URL)
                
                if(!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
                }
                
                const result = await res.json()
                setData(result.data)
                setLoading(false)
            } catch (err) {
                console.error('Fetch error:', err)
                setError(err.message)
                setLoading(false)
            }
        }
        
        fetchData();
    }, [URL])

    return {
        data,
        error,
        loading
    }
}

export default useFetch