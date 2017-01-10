import * as express from 'express';
import {Movie, IMovie} from './../models/Movies';
let router = express.Router();
//get all
//TODO paginated
router.get('/movies', (req, res, next) => {
    Movie.find({}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Movies', Error: e });
        res.json(data);
    });
});
//new
router.post('/movies', (req, res, next) => {
    Movie.create(req.body, (e, data) => {
        if (e) return next({ message: 'Could Not Find movies', Error: e });
        res.json(data);
    })
});

//update
router.put('/movies/:id', (req, res, next) => {
    Movie.update(
        { _id: req.params.id },
        req.body,
        {},
        (e, data) => {
            if (e) return next({ message: 'Could Not Find Movies', Error: e });
            res.json(data);
        });
});

export = router;
