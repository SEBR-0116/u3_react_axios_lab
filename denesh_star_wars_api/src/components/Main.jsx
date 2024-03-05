import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import StarshipList from "./StarshipList"
import Characters from "./Characters"
import Planets from "./Planets"
import Films from "./Films"
import Vehicles from "./Vehicles"
import Species from "./Species"
import StarshipPage from "./StartshipPage"


export default function Main ({ starships , characters, planets, films, vehicles, species }) {
    return(
        <div className="routes-container">
            <Routes>
                <Route path="/" exact Component={Home}></Route>
                <Route path="/StarshipList" element={<StarshipList starships={starships}/>}/>
                <Route path="/StarshipList/:id" element={<StarshipPage starships={starships}/>}/>
                <Route path="/Characters" element={<Characters characters={characters}/>}/>
                <Route path="/Planets" element={<Planets planets={planets}/>} ></Route>
                <Route path="/Films" element={<Films films={films}/>} ></Route>
                <Route path="/Vehicles" element={<Vehicles vehicles={vehicles}/>}></Route>
                <Route path="/Species" element={<Species species={species}/>}></Route>
            </Routes>
        </div>
        
    )
}