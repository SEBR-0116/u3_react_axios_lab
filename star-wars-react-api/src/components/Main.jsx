import Home from './Home'
import StarshipList from './StarshipList'
import Films from './Films'
import Planets from './Planets'
import Characters from './Characters'

import { Route, Routes } from 'react-router-dom'

const Main = () => {        
        return (
            <Routes>
                <Route exact path ="/" element ={<Home/>} />
                <Route exact path ="/starshipsList" element ={<StarshipList/>} />
                <Route exact path ="/films" element ={<Films/>} />
                <Route exact path ="/planets" element ={<Planets/>} />
                <Route exact path ="/characters" element ={<Characters/>} />    
            </Routes>
        )
    
}

export default Main