/////////// Setting Server & Dependencies ////////////

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;


app.listen(port, ()=> console.log("listening on port: "+port));
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));







