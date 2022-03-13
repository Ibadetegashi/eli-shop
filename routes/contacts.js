var Contacts = require('../models/Contacts');
var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();


/* GET ALL Contacts */
router.get('/', function(req, res, next) {
    Contacts.find(function (err, contacts) {
      if (err) return next(err);
      res.json(contacts);
    });
  });
  
/* GET SINGLE Contacts BY ID */
router.get('/:id', function(req, res, next) {
    Contacts.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE Contacts */
router.post('/', function(req, res, next) {
    Contacts.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* UPDATE Contacts */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Contacts.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Contacts */
router.delete('/:id', function(req, res, next) {
    Contacts.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
