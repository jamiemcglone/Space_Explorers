import './App.css';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import { useLocation } from 'react-router-dom';
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

            <Homepage
                location={location}
                displayLocation={displayLocation}
                setDisplayLocation={setDisplayLocation}
                transitionStage={transitionStage}
                setTransitionStage={setTransitionStage}
            />
        </div>
    );
}

export default App;
