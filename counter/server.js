const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));


const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000000 }
}));

app.get('/', (req, resp)=>{
    var count  = req.session.count;
    if(count == 0 || count==0){
        count=1;
    }
    resp.render("index", {count:count});
});

app.get('/byOne', (req,resp)=>{
    req.session.count++;
    resp.redirect('/');
});

app.get('/byTwo', (req,resp)=>{
    req.session.count+=2;
    resp.redirect('/');
});
app.get('/reset', (req,resp)=>{
    req.session.count=0;
    resp.redirect('/');
});

app.listen(8000, ()=>{
    console.log("Listening on port 8000.")
});
app.use(express.static(__dirname + "/static"));
