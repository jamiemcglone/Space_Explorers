const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
    const router = express.Router();

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({ _id: ObjectId(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    //create new Guest
    router.post('/', (req, res) => {
        const newPlayer = req.body;
        console.log('newPlayer:', req);
        collection
            .insertOne(newPlayer)
            .then((doc) => collection.findOne({ _id: doc.insertedId }))
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
            .updateOne({ _id: ObjectId(id) }, { $set: updatedData })
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    return router;
};

module.exports = createRouter;
