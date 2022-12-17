import './App.css';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import Game from './containers/Game';
import PlanetInfo from './components/education/PlanetInfo';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage('fadeOut');
    }, [location, displayLocation]);

    return (
        <div className='App'>
            <Header />

            <Routes location={displayLocation}>
                <Route
                    path='/'
                    element={
                        <Homepage
                            location={location}
                            displayLocation={displayLocation}
                            setDisplayLocation={setDisplayLocation}
                            transitionStage={transitionStage}
                            setTransitionStage={setTransitionStage}
                        />
                    }
                />
                <Route path='/game' element={<Game />} />
                <Route path='/mercury' element={<PlanetInfo />} />
                <Route path='/venus' element={<PlanetInfo />} />
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
