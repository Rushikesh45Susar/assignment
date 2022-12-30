var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var db = require('./config.js');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
module.exports = router;

router.get('/getuser/:username/' , function(req, res){
    db.query('SELECT * FROM users WHERE username = ?' , [req.params.username] , function(err , result) {
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/adduser/:username/:password' , function(req , res ){
    var data = {
        "username": req.params.username ,
        "password": req.params.password 
    }
    db.query('INSERT INTO users SET ?' , [data] , function(err , result){
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    } )
})

router.get('/admin/:username' , function(req , res){
    db.query('SELECT * FROM admin WHERE username = ?' , [req.params.username] , function(err , result) {
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/addtheatre/:name' , function(req ,res){
    var data = {
        "name" : req.params.name 
    }
    db.query('INSERT INTO theatres SET ?' , [data] , function(err , result){
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/getTheatre' , function(req , res){
    db.query('SELECT * FROM theatres' , function(err , result){
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/addMovie/:name/:date/:thid' ,  function(req , res){
    var data = {
        "name": req.params.name ,
        "movie_date": req.params.date ,
        "slots": 60 ,
        "th_id" : req.params.thid
    }
    db.query('INSERT INTO movies SET ?' , [data] , function(err , result){
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/getMovie' , function(req , res){
    db.query('SELECT * FROM movies' , function(err , result){
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/book/:movie/:thId/:date/:user/:seats/:slots' , function(req , res){
    var data = {
        "username": req.params.user,
        "movie": req.params.movie,
        "theatre" : req.params.thId,
        "seats" : req.params.seats,
        "book_date": req.params.date 
    }
    db.query('INSERT INTO bookings SET ?' , [data] , function(err ,result){
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
    db.query('UPDATE movies SET ?  WHERE name = ? AND th_id = ?', [{"slots" : (req.params.slots - req.params.seats)} , req.params.movie , req.params.thId ] , function(err , result){
        if(err){
            throw err ;
        }else{
            console.log(result);
        }
    })
})