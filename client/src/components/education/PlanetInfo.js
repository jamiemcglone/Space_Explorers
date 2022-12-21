import { useEffect, useState, useCallback, useRef } from 'react';
// import {useHistory} from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import './PlanetInfo.css';

const PlanetInfo = ({ planet }) => {

    const [randomIndex, setRandomIndex] = useState(0);



    // if (!planet) return null

    const Div0 = styled.div`
        display: flex;
    `;

    const Div1 = styled.div`
        background: grey;
        display: flex;
        width: 30rem;
        margin: 2rem;
        border-radius: 4px;
    `;
    const Div2 = styled.div`
        background: grey;
        display: flex;
        width: 30rem;
        margin: 2rem;
        border-radius: 4px;
    `;
    const Div3 = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const IMG = styled.img`
        height: 10rem;
        width: auto;
    `;

    const RandomImage = styled.img`
        height: 10rem;
        width: auto;
    `;

    const randomGenerator = () => {

            const random = Math.floor(Math.random() * planet.alt_images.length);
            setRandomIndex(random);
    }

    return (
        <>
            <Div0>
                <h3>{planet.name}</h3>
                <Div1 className='planetInfo1'>
                    <img src={planet.image} alt='planet' />
                    <div>
                        <h4>{planet.name}</h4>
                        <p>{planet.planet_bio}</p>
                    </div>
                </Div1>
                <Div2>
                    <button onClick={randomGenerator}>Click me for a random image!</button>
                    {/* <img>{planet.alt_images[randomIndex - 1]}</p> */}
                    <RandomImage src={planet.alt_images[randomIndex]} alt='Random-Image' />
                </Div2>
            </Div0>
            <Div3>
                <ul id='accordion'>
                    <li>
                        <label htmlFor='first'>
                            Size, Mass, Gravity <span>&#8595;</span>
                        </label>
                        <input type='radio' name='accordion' id='first' htmlChecked />
                        <div className='content'>
                            <p>
                                Size: {planet.data.size}
                                <br></br>
                                Mass: {planet.data.mass}
                                <br></br>
                                Gravity: {planet.data.gravity}
                                <br></br>
                            </p>
                        </div>
                    </li>
                    <li>
                        <label htmlFor='second'>
                            Composition <span>&#8595;</span>
                        </label>
                        <input type='radio' name='accordion' id='second' />
                        <div className='content'>
                            <p>{planet.data.composition}</p>
                        </div>
                    </li>
                    <li>
                        <label htmlFor='third'>
                            Would you like to know more? <span>&#8595;</span>
                        </label>
                        <input type='radio' name='accordion' id='third' />
                        <div className='content'>
                            <p>{planet.data.extra}</p>
                        </div>
                    </li>
                </ul>
            </Div3>
        </>
    );
};

export default PlanetInfo;
