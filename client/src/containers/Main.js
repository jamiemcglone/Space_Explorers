import { Routes, Route } from 'react-router-dom';

import HomepageContainer from './HomepageContainer'
import GameContainer from './GameContainer';
import PlanetInfo from '../components/education/PlanetInfo';
import PlanetService from '../service/PlanetService';
import SolarSystem from '../components/education/SolarSystem';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';


const Main = () => {
    const [allPlanets, setAllPlanets] = useState([]);
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');
    useEffect(() => {
        if (location !== displayLocation) setTransitionStage('fadeOut');
    }, [location, displayLocation]);


    useEffect(() => {
        PlanetService.getPlanets().then((planets) => setAllPlanets(planets));
    }, []);

    return (
        <section
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === 'fadeOut') {
                    setTransitionStage('fadeIn');
                    setDisplayLocation(location);
                }
            }}>
            <Routes location={displayLocation}>
                    <Route path='/' element={<HomepageContainer planets={allPlanets} />} />
                    <Route path='/game' element={<GameContainer planets={allPlanets} />} />
                    <Route path='/solarsystem' element={<SolarSystem planet={allPlanets} />} />
                    <Route
                        path='/sun'
                        element={allPlanets[0] ? <PlanetInfo planet={allPlanets[0]} /> : null}
                    />
                    <Route
                        path='/mercury'
                        element={allPlanets[1] ? <PlanetInfo planet={allPlanets[1]} /> : null}
                    />
                    <Route
                        path='/venus'
                        element={allPlanets[2] ? <PlanetInfo planet={allPlanets[2]} /> : null}
                    />
                    <Route
                        path='/earth'
                        element={allPlanets[3] ? <PlanetInfo planet={allPlanets[3]} /> : null}
                    />
                    <Route
                        path='/mars'
                        element={allPlanets[4] ? <PlanetInfo planet={allPlanets[4]} /> : null}
                    />
                    <Route
                        path='/jupiter'
                        element={allPlanets[5] ? <PlanetInfo planet={allPlanets[5]} /> : null}
                    />
                    <Route
                        path='/saturn'
                        element={allPlanets[6] ? <PlanetInfo planet={allPlanets[6]} /> : null}
                    />
                    <Route
                        path='/uranus'
                        element={allPlanets[7] ? <PlanetInfo planet={allPlanets[7]} /> : null}
                    />
                    <Route
                        path='/neptune'
                        element={allPlanets[8] ? <PlanetInfo planet={allPlanets[8]} /> : null}
                    />
                    <Route
                        path='/pluto'
                        element={allPlanets[9] ? <PlanetInfo planet={allPlanets[9]} /> : null}
                    />
                </Routes>
            
        </section>
    );
};

export default Main;