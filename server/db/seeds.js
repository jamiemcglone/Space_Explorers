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
    {planet:{
        name: "Mercury",
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
    },
]);
