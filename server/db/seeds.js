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
