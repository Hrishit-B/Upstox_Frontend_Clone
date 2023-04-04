const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const viewRouter = require('./routes/viewRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/', viewRouter);

module.exports = app;