const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const validateReq = require('../middleware/validationConfig');

const Movie = require('../models/movie');

router.get('/', (req, res) => {
    Movie.fetchAll()
        .then(function (data) {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Movie.fetchById(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
});

router.post('/', validateReq(), (req, res) => {                          //validateReq,
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({message: "Invalid input type."});
    }

        const movie = new Movie(req.body);
        movie.checkName().then(()=>{
            movie.save()
                .then((data) => {
                    res.status(201).send(data);
                })
        }).catch((err)=>{
           res.status(400).send(err);
        });

});

router.put('/:id', validateReq(), (req, res) => {                          //validateReq,
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({message: "Invalid input type."});
    }
    const id = req.params.id;
    Movie.updateById(id, req.body)
        .then((data) => {
            res.send();
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Movie.deleteById(id)
        .then((data) => {
            res.send();
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;
