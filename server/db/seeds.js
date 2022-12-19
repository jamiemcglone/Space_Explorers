use space_saga;

db.dropDatabase();

db.players.insertMany([
    {
        name: 'John Snow',
        score: 20
    },
    {
        name: 'Jane Doe',
        score:50
    },
    {
        name: 'Fred Flintstone',
        score: 60
    },

]);
db.planets.insertMany([
    {
        name: "Sun",
        image: "./images/sun.png",
        coordinates: " xxx",
        questions:[
            {
                question: "How old is the Sun?",
                options: {a:"4,603 billion years",b:"1,000 billion years",c:"280 billion years"},
                correctAnswer:"a",
                extension: "While Earth is 4,543 billion years old"
            },
            {
                question: "What is the largest object in our solar system?",
                options: {a:"Earth",b:"Sun",c:"Neptune"},
                correctAnswer:"b",
                extension: "However, its size is average compared to other stars."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    
    },
    {
        name: "Mercury",
        image: "./images/mercury.png",
        coordinates: " xxx",
        questions:[
            {
                question: "How long does a day on Mercury last compering to Earth days?",
                options: {a:"1 Earth day",b:"19 Earth days",c:"59 Earth days"},
                correctAnswer: "c",
                extension: "This is because Mercury's rotation around its axis lasts 59 days, and it takes 88 days to move around its orbit around the Sun."
            },
            {
                question: "What is Mercury made of?",
                options: {a:"It's a gas giant",b:"It's an ice giant",c:"It's a rocky planet"},
                correctAnswer:"c",
                extension: "Mercury, Venus, Earth and Mars are terrestrial planets (also known as rocky planets). They are mostly made up of silicate rocks and metals. Jupiter and Saturn are known as gas giants, while Uranus and Neptune are ice giants."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Venus",
        image: "./images/venus.png",
        coordinates: " xxx",
        questions:[
            {
                question: "What's the hottest planet in our solar system?",
                options: {a:"Jupiter",b:"Venus",c:"Mercury"},
                correctAnswer:"b",
                extension:"Venus surface temperature is 460 °C"
            },
            {
                question: "Which planet in our solar system rotates clockwise?",
                options: {a:"Venus",b:"Jupiter",c:"Uranus"},
                correctAnswer:"a",
                extension: "All other planets spin anti-clockwise on their axis and orbit the Sun in an anti-clockwise direction. Venus also orbits the Sun anti-clockwise, but its unusual axis rotation is due to being upside down."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Earth",
        image: "./images/earth.png",
        coordinates: " xxx",
        questions:[
            {
                question: "Which planet in our solar system is NOT named after a Roman god or goddess?",
                options: {a:"Jupiter",b:"Saturn",c:"Earth"},
                correctAnswer: "c",
                extension: "Earth's name comes from the the old English and Germanic words meaning 'the ground'."
            },
            {
                question: "What shape is planet Earth?",
                options: {a:"flat",b:"oval",c:"circular"},
                correctAnswer:"b",
                extension: "The Earth's oval shape is caused by the Earth’s spin and the effect of gravity."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Mars",
        image: "./images/mars.png",
        coordinates: " xxx",
        questions:[
            {
                question: "How long does a day on Mars last?",
                options: {a:"24 h",b:"24 h 37 min",c:"48 h"},
                correctAnswer: "b",
                extension: "A day on Mars is 24 hours and 37 minutes - only a little bit longer than a day on our own planet. A year on Mars, however, is almost twice as long, lasting 687 Earth days! This is because it takes a lot longer than Earth to complete its orbit around the Sun."
            },
            {
                question: "Where is the highest volcano in our solar system?",
                options: {a:"Mars",b:"Earth",c:"Venus"},
                correctAnswer: "a",
                extension: "Olympus Mons found on Mars is the largest volcano in the solar system reaching 24 km high. It's 3 times higher than Mount Everest."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Jupiter",
        image: "./images/jupiter.png",
        coordinates: " xxx",
        questions:[
            {
                question: "Which planet in our solar system has the greatest number of moons?",
                options: {a:"Mars",b:"Jupiter",c:"Uranus"},
                correctAnswer:"b",
                extension: "Jupiter has 79 moons"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: {a:"Earth",b:"Saturn",c:"Jupiter"},
                correctAnswer:"leblabla",
                extension: "c"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Saturn",
        image: "./images/saturn.png",
        coordinates: " xxx",
        questions:[
            {
                question: "How many moons does Saturn have?",
                options: {a:"5",b:"53",c:"82"},
                correctAnswer:"c",
                extension: "Saturn has at least 82 moons circling in its orbit of which 53 are officially named." 
            },
            {
                question: "Which planet is the flattest?",
                options: {a:"Saturn",b:"Earth",c:"Jupiter"},
                correctAnswer:"a",
                extension: "Its polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation. Saturn turns on its axis once every 10 hours and 34 minutes giving it the second-shortest day of any of the solar system’s planets."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Uranus",
        image: "./images/uranus.png",
        coordinates: " xxx",
        questions:[
            {
                question: "What's the coldest planet in our solar system?",
                options: {a:"Neptune",b:"Mars",c:"Uranus"},
                correctAnswer: "c",
                extension:"Uranus is the seventh planet from the Sun but still coldest than Neptune which is  much further away."
            },
            {
                question: "How many years it takes Uranus to make one trip around the Sun?",
                options: {a:"1",b:"84",c:"14"},
                correctAnswer:"b",
                extension: "During some parts of its orbit one or the other of its poles point directly at the Sun and get about 42 years of direct sunlight. The rest of the time they are in darkness."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Neptune",
        image: "./images/neptune.png",
        coordinates: " xxx",
        questions:[
            {
                question: "How lond does a year on Neptune last comparing to a year on Earth?",
                options: {a:"164.81 Earth Years",b:"1 Earth Year",c:"64.81 Earth Years"},
                correctAnswer:"a",
                extension: ""
            },
            {
                question: "How many rings does Neptune have?",
                options: {a:"0",b:"1",c:"6"},
                correctAnswer:"c",
                extension: "They are very faint and likely made up of ice particles mixed with dust grains and possibly coated with a carbon-based substance."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Pluto",
        image: "./images/pluto.png",
        coordinates: " xxx",
        questions:[
            {
                question: "Is Pluto a planet?",
                options: {a:"It's a star",b:"It's a planet" ,c:"It's a dwarf planet"},
                correctAnswer:"c",
                extension: "Pluto is now classified as a dwarf planet because, while it is large enough to have become spherical, it is not big enough to exert its orbital dominance and clear the neighborhood surrounding its orbit."
            },
            {
                question: "When was Pluto reclassified from a planet to a dwarf planet?",
                options: {a:"1991",b:"2006",c:"2013"},
                correctAnswer:"b",
                extension: "For the 76 years between Pluto being discovered (in 1930) and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun."
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
]);
