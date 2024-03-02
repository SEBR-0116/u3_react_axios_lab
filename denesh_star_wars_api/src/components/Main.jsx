import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import StarshipList from "./StarshipList"

export default function Main ({ starships }) {
    return(
        <div className="routes-container">
            <Routes>
                <Route path="/" exact Component={Home}></Route>
                <Route path="/StarshipList" element={<StarshipList starships={starships}/>}/>
            </Routes>
        </div>
        
    )
}