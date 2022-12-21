import { useState } from 'react';
// import {useHistory} from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import './PlanetInfo.css';

const PlanetInfo = ({ planet }) => {
    const [randomIndex, setRandomIndex] = useState(0);


    const SectionContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 25%;
        width: 80%;
        margin: auto;
    `;
    const PlanetInfoWrapper = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        gap: 1rem;
    `;

    const PlanetFlexItem = styled.div`
        display: flex;
        border-radius: 5px;
        width: 50%;
        background-color: gray;
        height: auto;
    `;

    const AccordionButtonsWrapper = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    `;

    const PlanetImage = styled.img`
        width: 50%;
        object-fit: cover;
    `;
    const RandomizerBtn = styled.button`
        width: 50%;
    `;
    const randomGenerator = () => {
        const random = Math.floor(Math.random() * planet.alt_images.length);
        setRandomIndex(random);
    };

    return (
        <SectionContainer>
            <h1>{planet.name}</h1>
            <PlanetInfoWrapper>
                <PlanetFlexItem>
                    <PlanetImage src={planet.image} alt='planet' />
                    <div>{planet.planet_bio}</div>
                </PlanetFlexItem>
                <PlanetFlexItem>
                    <RandomizerBtn onClick={randomGenerator}>
                        Click me for a random image!
                    </RandomizerBtn>
                    <PlanetImage src={planet.alt_images[randomIndex]} alt='Random-Image' />
                </PlanetFlexItem>
            </PlanetInfoWrapper>
            <AccordionButtonsWrapper>
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
            </AccordionButtonsWrapper>
        </SectionContainer>
    );
};

export default PlanetInfo;
