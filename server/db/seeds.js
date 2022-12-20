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
        coordinates:{ x:950, y:0},
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
        data: {
                size: "696,340km",
                mass: "1.989 × 10^30kg",
                gravity: "274 m/s²",
                composition: "Hydrogen and Helium",
                extra: "If you were to go and attack the sun, you would be best to do it at night when it is switched off"
        }// extend later on to an accordion with fun facts
    
    },
    {
        name: "Mercury",
        image: "./images/mercury.png",
        coordinates:{ x:850, y:50},
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
        data: {
            size: "2,439.7km",
            mass: "3.285 × 10^23kg",
            gravity: "3.7 m/s²",
            composition: "Oxygen, sodium, hydrogen, helium, and potassium",
            extra: "One year on Mercury is just 88 Earth days!"
    }// extend later on to an accordion with fun fact// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Venus",
        image: "./images/venus.png",
        coordinates:{ x:750, y:100},
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
        data: {
            size: "6,051.8km",
            mass: "4.867 × 10^24kg",
            gravity: "8.87 m/s²",
            composition: "Carbon dioxide and nitrogen",
            extra: "Venus is hotter than Mercury, despite being further from the Sun"
    }// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Earth",
        image: "./images/earth.png",
        coordinates:{ x:650, y:150},
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
        data: {
            size: "6,371km",
            mass: "5.972 × 10^24kg",
            gravity: "9.807 m/s²",
            composition: "Nitrogen and oxygen",
            extra: "James Yates lives on this big bad rock with his son, James Jnr."
    }// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Mars",
        image: "./images/mars.png",
        coordinates:{ x:550, y:200},
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
        data: {
            size: "6,779km",
            mass: "6.39 × 10^23kg",
            gravity: "3.721 m/s²",
            composition: "Iron, nickel and sulfur",
            extra: "Frozen water exists on Mars"
    }
        // extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Jupiter",
        image: "./images/jupiter.png",
        alt_images: [
            "./images/Jupiter/Jupiter1.png",
            "./images/Jupiter/Jupiter2.png",
            "./images/Jupiter/Jupiter3.jpeg",
            "./images/Jupiter/Jupiter4.png",
            "./images/Jupiter/Jupiter5.jpeg",
        ],
        coordinates:{ x:450, y:250},
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
        data: {
            size: "69,911km",
            mass: "1.898 × 10^27kg",
            gravity: "24.79 m/s²",
            composition: "Hydrogen and helium",
            extra: "The red spot is an anticyclonic storm that is about three times the size of Earth"
    }// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Saturn",
        image: "./images/saturn.png",
        alt_images: [
            "./images/Saturn/Saturn1.png",
            "./images/Saturn/Saturn2.png",
            "./images/Saturn/Saturn3.jpeg",
            "./images/Saturn/Saturn4.jpeg",
            "./images/Saturn/Saturn5.jpeg",
        ],
        coordinates:{ x:350, y:300},
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
        data: {
            size: "58,232km",
            mass: "5.683 × 10^26kg",
            gravity: "10.44 m/s²",
            composition: "Hydrogen, helium, iron and nickel",
            extra: "You cannot stand on Saturn as it is too gassy"
    }// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Uranus",
        image: "./images/uranus.png",
        alt_images: [
            "./images/Uranus/Uranus1.jpeg",
            "./images/Uranus/Uranus2.jpeg",
            "./images/Uranus/Uranus3.jpeg",
            "./images/Uranus/Uranus4.png",
            "./images/Uranus/Uranus5.jpeg",
        ],
        coordinates:{ x:250, y:350},
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
        data: {
            size: "25,362km",
            mass: "8.681 × 10^25kg",
            gravity: "8.87 m/s²",
            composition: "Water, methane and ammonia",
            extra: "Uranus was the first planet to be discovered with a telescope"
    }// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Neptune",
        image: "./images/neptune.png",
        alt_images: [
            "./images/Neptune/Neptune1.jpeg",
            "./images/Neptune/Neptune2.jpeg",
            "./images/Neptune/Neptune3.jpeg",
            "./images/Neptune/Neptune4.png",
            "./images/Neptune/Neptune5.png",
        ],
        coordinates:{ x:150, y:400},
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
        data: {
            size: "24,622km",
            mass: "1.024 × 10^26kg",
            gravity: "11.15 m/s²",
            composition: "Water, methane and ammonia",
            extra: "One year on Neptune is equivalent to 165 Earth years"
    }
        // extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Pluto",
        image: "./images/pluto.png",
        alt_images: [
            "./images/Pluto/Pluto1.png",
            "./images/Pluto/Pluto2.jpeg",
            "./images/Pluto/Pluto3.png",
            "./images/Pluto/Pluto4.jpeg",
            "./images/Pluto/Pluto5.png",
        ],
        coordinates:{ x:50, y:450},
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
        data: {
            size: "1,188.3km",
            mass: "1.309 × 10^22kg",
            gravity: "0.62 m/s²",
            composition: "Nitrogen, oxygen, argon, methane",
            extra: "Pluto is not a planet"
    }
      // extend later on to an accordion with fun facts
    }
    ,
]);
