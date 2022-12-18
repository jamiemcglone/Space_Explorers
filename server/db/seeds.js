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
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    
    },
    {
        name: "Mercury",
        image: "./images/mercury.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Venus",
        image: "./images/venus.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
,
    {
        name: "Earth",
        image: "./images/earth.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Mars",
        image: "./images/mars.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Jupiter",
        image: "./images/jupiter.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Saturn",
        image: "./images/saturn.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Uranus",
        image: "./images/uranus.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Neptune",
        image: "./images/neptune.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
    {
        name: "Pluto",
        image: "./images/pluto.png",
        questions:[
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            },
            {
                question: 'blabla',
                options: ["option1","option2","option3"],
                answer:"leblabla"
            }
        ],
        general_info:"balblablalbal"// extend later on to an accordion with fun facts
    }
    ,
]);
