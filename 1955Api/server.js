/////////// Setting Server & Dependencies ////////////

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;


app.listen(port, ()=> console.log("listening on port: "+port));
app.use(express.json());

const connect = require('./server/config/mongoose.js')(app);
const routes =require('./server/config/routes.js')(app);




