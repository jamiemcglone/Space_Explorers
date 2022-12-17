import './App.css';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import Game from './containers/Game';
import PlanetInfo from './components/education/PlanetInfo';
import {  Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    
    const [allPlanets] = useState([
        { name: 'mercury', index: 1 },
        { name: 'venus', index: 2 },
        { name: 'Planet3', index: 4 },
        { name: 'Planet4', index: 5 },
        { name: 'Planet 5', index: 6 },
        { name: 'Planet 6', index: 7 },
        { name: 'Planet 7', index: 8 },
        { name: 'Planet 8', index: 9 },
    ]);
    // useEffect(() => {
    //     if (location !== displayLocation) setTransitionStage('fadeOut');
    // }, [location, displayLocation]);

    return (
        <div className='App'>
            <Header />

            <Routes>
                <Route path='/' element={<Homepage planets={allPlanets} />} />
                <Route path='/game' element={<Game />} />
                <Route path='/mercury' element={<PlanetInfo planet={allPlanets[0]} />} />
                <Route path='/venus' element={<PlanetInfo planet={allPlanets[1]}/>} />
                <Route path='/earth' element={<PlanetInfo />} />
                <Route path='/mars' element={<PlanetInfo />} />
                <Route path='/jupiter' element={<PlanetInfo />} />
                <Route path='/saturn' element={<PlanetInfo />} />
                <Route path='/uranus' element={<PlanetInfo />} />
                <Route path='/neptune' element={<PlanetInfo />} />
            </Routes>
        </div>
    );
}

export default App;
