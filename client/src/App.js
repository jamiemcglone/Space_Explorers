import './App.css';
import HomepageContainer from './containers/HomepageContainer';
import Header from './components/Header';
import GameContainer from './containers/GameContainer';
import PlanetInfo from './components/education/PlanetInfo';
import PlanetService from './service/PlanetService';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    const [allPlanets, setAllPlanets] = useState([]);
    useEffect(() => {
        PlanetService.getPlanets().then((planets) => setAllPlanets(planets));
    }, []);

    console.log(allPlanets);
    return (
        <>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/' element={<HomepageContainer planets={allPlanets} />} />
                    <Route path='/game' element={<GameContainer />} />
                    <Route path='/sun' element={<PlanetInfo planet={allPlanets[0]} />} />
                    <Route path='/mercury' element={<PlanetInfo planet={allPlanets[1]} />} />
                    <Route path='/venus' element={<PlanetInfo planet={allPlanets[2]} />} />
                    <Route path='/earth' element={<PlanetInfo planet={allPlanets[3]} />} />
                    <Route path='/mars' element={<PlanetInfo planet={allPlanets[4]} />} />
                    <Route path='/jupiter' element={<PlanetInfo planet={allPlanets[5]} />} />
                    <Route path='/saturn' element={<PlanetInfo planet={allPlanets[6]} />} />
                    <Route path='/uranus' element={<PlanetInfo planet={allPlanets[7]} />} />
                    <Route path='/neptune' element={<PlanetInfo planet={allPlanets[8]} />} />
                    <Route path='/pluto' element={<PlanetInfo planet={allPlanets[9]} />} />
                    <Route path='/pluto' element={<PlanetInfo planet={allPlanets[9]} />} />
                </Routes>
            </div>
            <div className='wrapper-animation'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
        </>
    );
}

export default App;
