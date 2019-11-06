/////////// Setting Server & Dependencies ////////////
// Dependences to install( npm init, npm i express mongoose ejs session.io body-parser moment)

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { Schema }= mongoose;
const port = process.env.PORT || 8000;
const moment = require('moment');

app.listen(port, ()=> console.log("listening on port: "+port));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost/', // Add The DB Name after localhost
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex: true}
);

mongoose.connection.once('connected', () => console.log("connected to Mongo DB"));
