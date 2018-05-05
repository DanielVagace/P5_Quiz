var express = require('express');
var router = express.Router();
const {model} = require("../models");
var quizMaker = require ("../controllers");
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Quiz' });
    });


    router.get('/credits', function(req, res, next) {
        res.render('credits', { title: 'Express' });
    });

    router.get('/author', function (req,res,next){
        res.render('author')
    });

    router.get('/quizzes', function(req, res, next) {
        quizMaker.index(req,res,next);
    });

    module.exports = router;
