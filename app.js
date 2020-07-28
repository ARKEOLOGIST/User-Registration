const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const registration = require('./routes/registration');
const HttpError = require('./models/http-error');
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use('/',registration);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });
  
mongoose.connect('mongodb+srv://Arka:Arkadyuti@formdb.psrlp.mongodb.net/users?retryWrites=true&w=majority')
  .then(() => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });



