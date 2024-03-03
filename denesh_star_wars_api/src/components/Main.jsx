import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import StarshipList from "./StarshipList"
import Characters from "./Characters"
import Planets from "./Planets"

export default function Main ({ starships , characters, planets}) {
    return(
        <div className="routes-container">
            <Routes>
                <Route path="/" exact Component={Home}></Route>
                <Route path="/StarshipList" element={<StarshipList starships={starships}/>}/>
                <Route path="/Characters" element={<Characters characters={characters}/>}/>
                <Route path="/Planets" element={<Planets planets={planets}/>} ></Route>
            </Routes>
        </div>
        
    )
}