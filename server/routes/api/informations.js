const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get post

router.get('/', async (req, res) => {
    const products = await loadProductsCollection();
    res.send(await products.find({}).toArray());
});

// add post

router.post('/', async (req, res) => {
    const products = await loadProductsCollection();
    await products.insertOne({
        text: req.body.text,
        createdAt: new Date(),
    });
    res.status(201).send();
});
// delete post
router.delete('/:id', async (req, res) => {
    const products = await loadProductsCollection();
    await products.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadProductsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb://heroku_qpw8l5w0:e70s379qqad0o9fuks9lupbs4a@ds235417.mlab.com:35417/heroku_qpw8l5w0', {
            useNewUrlParser: true,
        },
    );


    return client.db('heroku_qpw8l5w0').collection('products');
}

module.exports = router;
