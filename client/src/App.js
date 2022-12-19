import './App.css';
import HomepageContainer from './containers/HomepageContainer';
import Header from './components/Header';
import GameContainer from './containers/GameContainer';
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
        <main className='App'>
            <Header />
        <body>
            <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            <span>JJOGSA</span>
            <br></br>
            <span>An exploration education!</span>
        </div>
    </section>

            <Routes>
                <Route path='/' element={<HomepageContainer planets={allPlanets} />} />
                <Route path='/game' element={<GameContainer />} />
                <Route path='/sun' element={<PlanetInfo planet={allPlanets[0]} />} />
                <Route path='/mercury' element={<PlanetInfo planet={allPlanets[1]} />} />
                <Route path='/venus' element={<PlanetInfo planet={allPlanets[2]}/>} />
                <Route path='/earth' element={<PlanetInfo planet={allPlanets[3]}/>} />
                <Route path='/mars' element={<PlanetInfo planet={allPlanets[4]}/>} />
                <Route path='/jupiter' element={<PlanetInfo planet={allPlanets[5]}/>} />
                <Route path='/saturn' element={<PlanetInfo planet={allPlanets[6]}/>} />
                <Route path='/uranus' element={<PlanetInfo planet={allPlanets[7]}/>} />
                <Route path='/neptune' element={<PlanetInfo planet={allPlanets[8]}/>} />
<<<<<<< HEAD
                <Route path='/pluto' element={<PlanetInfo planet={allPlanets[9]}/>} />
=======
                <Route path='/pluto' element={<PlanetInfo planet={allPlanets[9]} />} />
>>>>>>> 54da3cb1fa7ca29895d72c1fca11a5e88e36bdd5
            </Routes>
            </body>
        </main>
    );
}

export default App;
