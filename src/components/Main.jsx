import { Routes, Route } from 'react-router-dom';
import StarshipList from './StarshipList';
import Home from './Home';
import Films from './Films';
import Planets from './Planets';
import Characters from './Characters';
import StarshipListPage from './StarshipListPage';
import CharacterPage from './CharacterPage';
import PlanetPage from './PlanetPage';
import FilmPage from './FilmPage';

const Main = () => {
    return (
        <div className="main-container">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/starships" element={<StarshipList />} /> 
                <Route exact path="/starships/:id" element={<StarshipListPage />} /> 
                <Route exact path="/films" element={<Films />} />
                <Route path="/films/:id" element={<FilmPage />} />
                <Route exact path="/planets" element={<Planets />} /> 
                <Route path="/planets/:id" element={<PlanetPage />} /> 
                <Route exact path="/characters" element={<Characters />} />
                <Route path="/characters/:id" element={<CharacterPage />} />
            </Routes>
        </div>
    );
};

export default Main;
