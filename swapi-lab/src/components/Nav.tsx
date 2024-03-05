import { Link } from "react-router-dom";

interface NavProps {
    endpoint: string
}

export default function Nav({endpoint}: NavProps) {
    return (
        <div className="navContainer">
            <Link to={`list/${endpoint}`}>{endpoint === '' ? 'Home' : endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}</Link>
        </div>
    )
}