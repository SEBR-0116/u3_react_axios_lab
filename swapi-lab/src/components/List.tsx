import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function List() {
    
    const [results, setResults] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const {category} = useParams()

    const getEntries = async () => {
        let apiResults: any = []

        let response: any = await axios.get(`https://swapi.dev/api/${category}/`)
        apiResults = [...apiResults, ...response.data.results]

        do {
            response.data.next && (response = await axios.get(response.data.next))
            apiResults = [...apiResults, ...response.data.results]
            console.log(response)
        } while (response.data.next)

        setResults([...apiResults])
    }

    useEffect(() => {
        getEntries()
        console.log('Starships: ', results)
    }, [])

    useEffect(() => {
        results && setIsLoading(false)
    }, [results])

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
                                
                            }}>More info</button>
                    </div>
                ))
            }
        </div>
    )
}