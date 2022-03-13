var Products = require('../models/Products');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var multer = require('multer');
var fs = require('fs');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../static/images/')
  },
  filename: (req, file, cb) => {
    let ext = file.originalname.substring(file.originalname.indexOf(".") + 1);
    cb(null, file.fieldname + '-' + Date.now() + "." + ext)
  }
});
var upload = multer({
  storage: storage
});

/* GET ALL products */
router.get('/', function(req, res, next) {
  Products.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  
/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Products.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE PRODUCT 
router.post('/', function(req, res, next) {
  Products.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });*/

  router.post('/', upload.single('image'),
    function (req, res) {
      let products = req.body;
      products.name = req.body.name
      products.title = req.body.title
      products.category = req.body.category
      products.image = req.body.image != 'undefined' ? req.file.filename : null
      products.description = req.body.description
      Products.create(products, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    
  });

  /* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Products.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Products.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
