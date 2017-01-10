import * as express from 'express';
import {Boxer, IBoxer} from './../models/Boxers';
let router = express.Router();
//get all
//TODO paginated
router.get('/boxers', (req, res, next) => {
    Boxer.find({}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Boxers', Error: e });
        res.json(data);
    });
});
//new
router.post('/boxers', (req, res, next) => {
    Boxer.create(req.body, (e, data) => {
        if (e) return next({ message: 'Could Not Find Boxers', Error: e });
        res.json(data);
    })
});

//update
router.put('/boxers/:id', (req, res, next) => {
    Boxer.update(
        { _id: req.params.id },
        req.body,
        {},
        (e, data) => {
            if (e) return next({ message: 'Could Not Find Boxers', Error: e });
            res.json(data);
        });
});

export = router;
