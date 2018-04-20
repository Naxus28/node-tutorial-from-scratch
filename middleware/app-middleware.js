import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';

export default (app) => {
  // serve static files in 'public'
  app.use(express.static('public'));

  // place express.json and express.urlencoded
  // middlewares before the routes are initialized
  app.use(express.json()); // this will parse json data sent to this server

  // this will parse urlencoded data sent to this server
  // extended: true is the default but if we don't pass it express will give us a warning
  app.use(express.urlencoded({extended: true})); 

  // serve favicon
  app.use(favicon('public/img/favs/favicon.ico'));

  // use morgan for development mode--see options here: https://expressjs.com/en/resources/middleware/morgan.html
  app.use(morgan('dev'));
};

