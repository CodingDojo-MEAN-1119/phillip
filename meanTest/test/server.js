const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app.use(parser.urlencoded({extended : true}))
   .use(parser.json())
   .use(express.static(path.join(__dirname,'dist','test')))

   .use(require('./server/routes'))
   .listen(port, () => console.log("Express server listening on port: ", port));
