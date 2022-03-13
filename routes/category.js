var Category = require('../models/Category');
var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();



router.get('/', function(req, res, next) {
    Category.find(function (err, category) {
      if (err) return next(err);
      res.json(category);
    });
  });
  

router.get('/:id', function(req, res, next) {
    Category.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


router.post('/', function(req, res, next) {
    Category.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Category.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  

router.delete('/:id', function(req, res, next) {
    Category.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
