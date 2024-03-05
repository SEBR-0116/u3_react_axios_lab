import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Details() {
    
    const [entry, setEntry] = useState<any>()

    const { category, id } = useParams()

    useEffect(() => {
        const getEntry = async () => {
            let response = await axios.get(`https://swapi.dev/api/${category}/${id}/`)
            console.log(response.data)
            setEntry(response.data)
        }
        getEntry()
    }, [])

    return (
        <div>
            {
                entry 
                ? Object.entries(entry).map(([key, value]: any) => {
                    
                    let newKey = key.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                    if (Array.isArray(value) || value.includes('http') || key === 'created' || key === 'edited') {
                        return
                    } else {
                        return (
                        <>
                            <h4>{newKey}: {value}</h4>
                        </>
                        )
                    }

                })
                : <h2>I'm loading</h2>
            }
        </div>
    )
}