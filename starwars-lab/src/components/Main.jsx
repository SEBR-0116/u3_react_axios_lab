import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'

const Main = () => {
    return (
        <>
         <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starships" element={<StarshipList/>}/>
            </Routes>
        </div>
        </>
    )
}

export default Main