//container

import {Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'

import Home from './Home'

const Main = (props) => {
    return (
        <div>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipList starships={props.starships} />} />
            </Routes>
        </div>
    )
}

export default Main
