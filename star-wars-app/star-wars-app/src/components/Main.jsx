import Home from "./Home";
import StarshipList from "./StarshipList";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  const [starShips, setStarShips] = useState([]);
  useEffect(() => {
    const getStarShips = async () => {
      const response = await axios.get("https://swapi.dev/api/starships");
      setStarShips(response.data.results);
    };
    getStarShips()
  }, []);
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/starships" element={<StarshipList starShips={starShips} />}></Route>
      </Routes>
    </div>
  );
}
