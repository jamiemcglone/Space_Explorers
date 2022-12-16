const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('space_saga');
        const planetsCollection = db.collection('planets');
        const playersCollection = db.collection('players');
        const planetsRouter = createRouter(planetsCollection);
        const playersRouter = createRouter(playersCollection);
        app.use('/api/planets', planetsRouter);
        app.use('/api/players', playersRouter);
    })
    .catch(console.err);

app.listen(9000, function () {
    console.log(`listening on port ${this.address().port}`);
});
