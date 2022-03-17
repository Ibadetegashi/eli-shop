const express = require('express');
// eslint-disable-next-line no-unused-vars
const  path = require('path');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  mongoose = require('mongoose');
const  config = require('./DB');
//const  products = require ('../routes/products');
const  contacts = require ('../routes/contacts');
//const  category = require ('../routes/category');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB);
      
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/contacts', contacts);

var port = process.env.PORT || 4001;

app.listen(port, function(){
  console.log('NodeJS Server Port: ', port);
});