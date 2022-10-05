import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url: string) => {
    const [data,setData] = useState<any[]>()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<any>(null)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
        
        if(url){
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/${url}`)
                setData(res.data)
            } catch (err) {
                setError(err)
            }

        }

            setLoading(false)
        }

        fetchData()
    },[url])

    return {data, loading, error}
}

export default useFetch