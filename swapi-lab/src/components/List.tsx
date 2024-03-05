import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function List() {
    
    const [results, setResults] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const {category} = useParams()

    let navigate = useNavigate()

    const getEntries = async () => {
        let apiResults: any = []

        let response: any = await axios.get(`https://swapi.dev/api/${category}/`)
        apiResults = [...apiResults, ...response.data.results]

        do {
            response.data.next && (response = await axios.get(response.data.next))
            apiResults = [...apiResults, ...response.data.results]
        } while (response.data.next)

        setResults([...apiResults])
    }

    const resetPage = async () => {
        setResults([])
        setIsLoading(true)
        await getEntries()
    }

    useEffect(() => {
        getEntries()
        console.log('Results: ', results)
    }, [])

    useEffect(() => {
        results.length > 0 && setIsLoading(false)
    }, [results])

    useEffect(() => {
        resetPage()
    }, [category])

    return (
        <div>
            {
                isLoading 
                ? <h1>Loading...</h1> 
                : results.map((result: any) => (
                    <div key={result.url}>
                        <h3>{result.name}</h3>
                        <button
                            onClick={() => {
                                navigate(`/list/${category}/${result.url.split("/")[result.url.split("/").length - 2]}`)
                            }}>More info</button>
                    </div>
                ))
            }
        </div>
    )
}