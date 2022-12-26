const express = require('express');
const router = express.Router();
const Posting = require('../models/Posting');

router.get('/', (req, res) => {
    Posting.find().then((postings) => res.json(postings));
});

router.get('/:id', async (req, res, next) => {
    try {
        const postingId = await Posting.findById(req.params.id);
        res.json(postingId);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res) => {
    const newPosting = await Posting.create(req.body)
    res.status(201).json(newPosting)
})

router.put('/:id', (req, res) => {
    Posting.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
    }).then((updatePosting) => {
        Posting.find({}).then((postings) => {
            res.json(postings)
        })
    });
});

router.delete('/:id', (req, res) => {
    Posting.findOneAndDelete({
        _id: req.params.id,
    }).then((deletePosting) => {
        Posting.find({}).then((postings) => {
            res.json(postings)
        })
    })
})
module.exports = router;