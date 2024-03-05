import Home from "./Home";
import StarshipList from "./StarshipList";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Vehicles from "./Vehicles";
import Films from "./Films";
import People from "./People";
import Species from "./Species";
import Planets from "./Planets";
import StarshipDetails from "./StarshipDetails";
import PeopleDetails from "./PeopleDetails";
import VehiclesDetails from './VehiclesDetails'
import FilmsDetails from './FilmsDetails'
import PlanetsDetails from './PlanetsDetails'
import SpeciesDetails from "./SpeciesDetails";

export default function Main() {
  const [starShips, setStarShips] = useState([]);
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    const getStarShips = async () => {
      const response = await axios.get("https://swapi.dev/api/starships");
      setStarShips(response.data.results);
    };

    const getPeople = async () => {
      const response = await axios.get("https://swapi.dev/api/people");
      setPeople(response.data.results);
    };
    const getFilms = async () => {
      const response = await axios.get("https://swapi.dev/api/films");
      setFilms(response.data.results);
    };

    const getPlanets = async () => {
      const response = await axios.get("https://swapi.dev/api/planets");
      setPlanets(response.data.results);
    };

    const getSpecies = async () => {
      const response = await axios.get("https://swapi.dev/api/species");
      setSpecies(response.data.results);
    };

    const getVehicles = async () => {
      const response = await axios.get("https://swapi.dev/api/vehicles");
      setVehicles(response.data.results);
    };
    getStarShips();
    getVehicles();
    getPeople();
    getFilms();
    getPlanets();
    getSpecies();
  }, []);

  console.log(vehicles);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starships" element={<StarshipList starShips={starShips} />}></Route>

        <Route path="/starships/:index" element={ <StarshipDetails starShips={starShips} />} />
        <Route
          path="/vehicles"
          element={<Vehicles vehicles={vehicles} />}
        ></Route>
        <Route path="/vehicles/:index" element={<VehiclesDetails vehicles={vehicles} />}></Route>
        <Route path="/films" element={<Films films={films} />}></Route>
        <Route path="/films/:index" element={<FilmsDetails films={films} />}></Route>
        <Route path="/people" element={<People people={people} />}></Route>
        <Route path="/people/:index" element={<PeopleDetails people={people} />}></Route>
        <Route path="/planets" element={<Planets planets={planets} />}></Route>
        <Route path="/planets/:index" element={<PlanetsDetails planets={planets} />}></Route>
        <Route path="/species" element={<Species species={species} />}></Route>
        <Route path="/species/:index" element={<SpeciesDetails species={species} />}></Route>
      </Routes>
    </div>
  );
}
