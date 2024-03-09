import {Route, Routes} from 'react-router-dom'
import Home from './Home'

import Film_List from './Film_List'
import Film_Detail from './Film_Detail'
import Character_List from './Character_List'
import Character_Detail from './Character_Detail'
import Planet_List from './Planet_List'
import Planet_Detail from './Planet_Detail'
import Species_List from './Species_List'
import Species_Detail from './Species_Detail'
import Ship_List from './Ship_List'
import Ship_Detail from './Ship_Detail'
import Vehicle_List from './Vehicle_List'
import Vehicle_Detail from './Vehicle_Detail'

import films from './Film_List'
import characters from './Character_List'
import planets from './Planet_List'
import species from './Species_List'
import starships from './Ship_List'
import vehicles from './Vehicle_List'

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/films" element={<Film_List/>}/>
                <Route path="/films/:id" element={<Film_Detail/>}/>
                
                <Route path="/characters" element={<Character_List/>}/>
                <Route path="/characters/:id" element={<Character_Detail/>}/>

                <Route path="/planets" element={<Planet_List/>}/>
                <Route path="/planets/:id" element={<Planet_Detail/>}/>

                <Route path="/species" element={<Species_List/>}/>
                <Route path="/species/:id" element={<Species_Detail/>}/>

                <Route path="/ships" element={<Ship_List/>}/>
                <Route path="/ships/:id" element={<Ship_Detail/>}/>

                <Route path="/vehicles" element={<Vehicle_List/>}/>
                <Route path="/vehicles/:id" element={<Vehicle_Detail/>}/>
            </Routes>
        </>
    )
}
export default Main