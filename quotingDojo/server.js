/////////// Setting Server & Dependencies ////////////

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');


app.listen(8000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));


const connect = require('./server/config/mongoose.js')(app);
const routes =require('./server/config/routes.js')(app);
