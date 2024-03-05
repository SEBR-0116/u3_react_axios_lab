import { Link } from "react-router-dom"
import Nav from "./Nav"

export default function Header() {
    const endpoints = ['starships', 'people', 'planets','species','vehicles']
    return (
        <div className="headerContainer">
            <Link to={'/'}>Home</Link>
            {
                endpoints.map((endpoint) => (
                    <Nav key={endpoint} endpoint={endpoint}/>
                ))
            }
        </div>
    )
}