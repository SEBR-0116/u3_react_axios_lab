import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Details from "./Details";

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/list/:category' element={<List/>}/>
                <Route path='/list/:category/:id' element={<Details/>}/>
            </Routes>
        </div>
    )
}