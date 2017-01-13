import * as express from 'express';
import {Movie, IMovie} from './../models/movies';
let router = express.Router();

router.get('/movies', (req, res, next) => {
  Movie.find({}, {}, (e, data) => {
    if (e) return next({ message: 'Could not find movies', Error:e});
    res.json(data);
  })
})

router.post('/movies', (req, res, next) => {
    Movie.create(req.body, (e, data) => {
        if (e) return next({
            message: 'could not create movie',
            Error: e
        });
        res.json(data);
    })
})

router.put('/movies/:id', (req, res, next) => {
    Movie.update({_id: req.params.id},req.body, {},(e, data) => {
        if (e) return next({
            message: 'could not update movie',
            Error: e
        });
        res.json(data);
    })
})
router.delete('/movies/:id', (req, res, next) => {
    Movie.remove({_id: req.params.id},(e) => {
        if (e) return next({
            message: 'could not delete movie',
            Error: e
        });
        res.json({});
    })
})
router.get('/movies/:id', (req, res, next) => {
  console.log(req.params.id);
  Movie.findOne({_id: req.params.id}, {}, (e, data) => {
    if (e) return next({ message: 'Could not find movies', Error:e});
    console.log(data);
    res.json(data);
  })
})
export = router;
