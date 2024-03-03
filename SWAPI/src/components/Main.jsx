import { Route, Routes } from 'react-router-dom'
import Home from '.Home'
import StarshipList from './StarshipList'
import Characters from './Characters'
import Films from './Films'
import Planets from './Planets'


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/starships' element= {<StarshipList />}/>
                <Route path='/characters' element= {<Characters />} />
                <Route path='/films' element= {<Films />} />
                <Route path='/planets' element= {<Planets />} />
            </Routes>
        </div>
    )
}