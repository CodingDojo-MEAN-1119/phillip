const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app.use(parser.urlencoded({extended : true}))
   .use(parser.json())
   .use(express.static(path.join(__dirname,'dist','public')))
   .use(cookieParser('aldfjasdfklahs83798yhsdflkhdsfasdf'))
   .use(session({
     saveUninitialized: true,
     secret: 'sessionsecret',
     resave: false,
     name: 'session',
     rolling: true,
     cookie: {
       secure: false,
       httpOnly: false,
       maxAge: 3600000
     }
   }))
   .use(require('./server/routes'))
   .listen(port, () => console.log("Express server listening on port: ", port));

