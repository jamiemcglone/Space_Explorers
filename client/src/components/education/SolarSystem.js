import React from 'react';
import styled from 'styled-components';

const SolarSystem = () => {
    const SolarContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 25%;
        width: 80%;
        margin: auto;
    `;
    const SolarInfoWrapper = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 1rem;
    `;

    const SolarFlexItem = styled.div`
        display: flex;
        border-radius: 5px;
        width: 40%;
        background-color: gray;
        height: 40vh;
        padding-left: 1rem;
        padding-right: 1rem;
        overflow:auto;
    `;

    const AccordionButtonsWrapper = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    `;

    const SolarImage = styled.img`
        height: 40vh;
        object-fit: cover;
        border-radius: 5px;
    `;

    return (
        <>
            <SolarContainer>
                <h1>The Solar System</h1>
                <SolarInfoWrapper>
                    <SolarImage src='./images/solarsystem.gif' alt='pictureOfSolarSystem' />

                    <SolarFlexItem>
                        <p>
                            The Solar System is the gravitationally bound system of the Sun and the
                            objects that orbit it. It formed 4.6 billion years ago from the
                            gravitational collapse of a giant interstellar molecular cloud. The vast
                            majority (99.86%) of the system's mass is in the Sun, with most of the
                            remaining mass contained in the planet Jupiter. The four inner system
                            planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being
                            composed primarily of rock and metal. The four giant planets of the
                            outer system are substantially larger and more massive than the
                            terrestrials. The two largest, Jupiter and Saturn, are gas giants, being
                            composed mainly of hydrogen and helium; the next two, Uranus and
                            Neptune, are ice giants, being composed mostly of volatile substances
                            with relatively high melting points compared with hydrogen and helium,
                            such as water, ammonia, and methane. All eight planets have nearly
                            circular orbits that lie near the plane of Earth's orbit, called the
                            ecliptic.
                        </p>
                    </SolarFlexItem>
                </SolarInfoWrapper>
                <AccordionButtonsWrapper>
                    <ul id='accordion'>
                        <li>
                            <label htmlFor='first'>
                                Why is it called the Solar System <span>&#8595;</span>
                            </label>
                            <input type='radio' name='accordion' id='first' htmlChecked />
                            <div className='content'>
                                <p>
                                    There are many planetary systems like ours in the universe, with
                                    planets orbiting a host star. Our planetary system is called
                                    “the solar system” because we use the word “solar” to describe
                                    things related to our star, after the Latin word for Sun, solis.
                                </p>
                            </div>
                        </li>
                        <li>
                            <label htmlFor='second'>
                                Composition <span>&#8595;</span>
                            </label>
                            <input type='radio' name='accordion' id='second' />
                            <div className='content'>
                                <p>
                                    Our solar system consists of our star, the Sun, and everything
                                    bound to it by gravity, the planets Mercury, Venus, Earth, Mars,
                                    Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as
                                    Pluto; dozens of moons; and millions of asteroids, comets, and
                                    meteoroids. Beyond our own solar system, we have discovered
                                    thousands of planetary systems orbiting other stars in the Milky
                                    Way.
                                </p>
                                <p>
                                    This all sits in something called "Space".
                                    <br></br>
                                    Space is a relatively simple word we use to describe our
                                    expanding universe. Space is an almost perfect vacuum, nearly
                                    void of matter and with extremely low pressure. In space, sound
                                    doesn't carry because there aren't molecules close enough
                                    together to transmit sound between them. Not quite empty, bits
                                    of gas, dust and other matter floats around "emptier" areas of
                                    the universe, while more crowded regions can host planets, stars
                                    and galaxies.
                                </p>
                            </div>
                        </li>
                        <li>
                            <label htmlFor='third'>
                                Would you like to know more? <span>&#8595;</span>
                            </label>
                            <input type='radio' name='accordion' id='third' />
                            <div className='content'>
                                <p>
                                    Over time, humanity has gone from gazeing upon the stars to
                                    reaching out into the unknow, either by satilites, probes,
                                    crewed spacecraft, to name a few. Over the last 100 years, our
                                    knowledge and understanding as exponentially grown. To a point
                                    where we know more about 'space' and our surrounding galaxy 'The
                                    Milky Way' than we do of our own oceans. So much so, future
                                    ventures such has terraforming, asteroid mining for resources,
                                    are becoming tangible realities with every year that passes.
                                    <br></br>
                                    The final leap will be to step fully into the great unknown,
                                    where the limitations of space travel and not as significant as
                                    what they once were. Where humans can successfully navigate to
                                    the end of our system and beyond within a lifetyle. But how will
                                    we do this? one curious observation is how science fiction is
                                    becoming more of a reality, simply watch some of the old Star
                                    Trek episides to see where we are today. These influences are a
                                    direct inspiration to why we have so many enginners and other
                                    scientists, working to unveil the unkown. Perhaps, you will find
                                    your own inspriation and step forth to the stars.
                                </p>
                            </div>
                        </li>
                    </ul>
                </AccordionButtonsWrapper>
            </SolarContainer>
        </>
    );
};

export default SolarSystem;
