import * as express from 'express';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as session from 'express-session';
import {User, IUser} from '../models/users';
let router = express.Router();

router.get('users/:id',function(req, res, next){
  User.findOne(req.params._id).select('-passwordHash -salt').then((user)=>{
    return res.status(200).json(user);
  });
});

router.get('/currentuser', (req, res, next)=>{
  return res.json(req.user);
});

router.post('/Register', function(req, res, next){
  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.save(function(err, user){
    if (err) return next(err);
    res.json({message:'registration complete'});
  });
});

router.post('/login/local',function(req,res,next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message:'Please Fill Out Every Field'});
  }

  passport.authenticate('local',{session: true}, function(err, user, info){
console.log('local auth');
console.log(err, user);
    if(err) return res.status(500);
    if(user){
      return req.logIn(user,(err)=>{
        if(err) return next({message:'login failed', error: err});
        return req.session.save(function(err){
          if(err) return next({message: 'session failed', error: err})
          return res.redirect('/');
        });

      });
    }
  })(req, res, next);
});

router.get('/logout/local', (req, res, next)=>{
  req.session.destroy((err)=>{
    if(err) return res.status(500).json({message: 'still authenticated please try again'});
    req.logout();
    req.user = null;
    return res.json({isAuthenticated: req.isAuthenticated()});
  });
});
export default router;
