import { useEffect, useState, useCallback, useRef } from "react";
// import {useHistory} from "react-router-dom";
import React from 'react';
import Styled from 'styled-components';
import'./PlanetInfo.css';

const PlanetInfo = ({planet}) => {

    if (!planet) return null;

    const Div0 = Styled.div`
    display: flex;
    `
    
    const Div1 = Styled.div`
    background: grey;
    display: flex;
    width: 30rem;
    margin: 2rem;
    `
    const Div2 = Styled.div`
    background: grey;
    display: flex;
    width: 30rem;
    margin: 2rem;
    `
    const Div3 = Styled.div`
    display: flex;
    flex-direction: column;
    `


    return (
        <>
        <Div0>
            <h3>{planet.name}</h3>
            <Div1 className='planetInfo1'>
                <img src={planet.image} alt="planet" /> 
                <div>
                <h4>{planet.name}</h4>
                <p>{planet.general_info}</p> 
                </div>
            </Div1>
            <Div2>
                <img src={planet.image} alt="planet" />  
            </Div2>
         </Div0>
         <Div3>
                <ul id="accordion">
                    <li>
                        <label htmlFor="first">Size, Mass, Gravity <span>&#8595;</span></label>
                        <input type="radio" name="accordion" id="first" htmlChecked/>
                        <div className="content">
                            <p>Its very big and heavy and draws things to it
                            </p>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="second">Composition <span>&#8595;</span></label>
                        <input type="radio" name="accordion" id="second"/>
                        <div className="content">
                            <p>It is made of rock
                            </p>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="third">Would you like to know more? <span>&#8595;</span></label>
                        <input type="radio" name="accordion" id="third"/>
                        <div className="content">
                            <p>I could know more but I do not know if I can...
                            </p>
                        </div>
                    </li>

                </ul>
               
            </Div3>
            </>
        
    );

}

export default PlanetInfo;
