import React, {useEffect, useRef} from 'react';
import Canvas from '../components/game/Canvas';

const GameContainer = ({planets}) => {

    useEffect(() => {
        playGameMusic()
    }, [])

    const soundRef = useRef(null);

    const playGameMusic = () => {
        soundRef.current.time = 0;
        soundRef.current.play();
    }

    return (    
    <>
    <Canvas planets ={planets}/>
    <audio 
    ref={soundRef}
    src="./sounds/space.mp3" />
    </>
    );
};


export default GameContainer;
