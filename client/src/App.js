import './App.css';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import Game from './containers/Game';
import PlanetInfo from './components/education/PlanetInfo';
import PlanetService from './service/PlanetService';
import {  Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    
    const [allPlanets,setAllPlanets] = useState([]);
    useEffect(() => {
        PlanetService.getPlanets().then(planets =>setAllPlanets(planets))
    }, []);
    
    console.log(allPlanets)        
    return (
        <div className='App'>
            <Header />

            <Routes>
                <Route path='/' element={<Homepage planets={allPlanets} />} />
                <Route path='/game' element={<Game />} />
                <Route path='/sun' element={<PlanetInfo planet={allPlanets[0]} />} />
                <Route path='/mercury' element={<PlanetInfo planet={allPlanets[1]} />} />
                <Route path='/venus' element={<PlanetInfo planet={allPlanets[2]}/>} />
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
