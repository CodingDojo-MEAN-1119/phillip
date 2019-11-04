const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));


// const session = require('express-session');
// app.use(session({
//   secret: 'keyboardkitteh',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 600000 }
// }));

app.get('/', (req, resp)=>{
    resp.render("index");
});

app.post('/form-process', (req,resp)=>{
    const data = {
        name: req.body.name,
        location: req.body.loction,
        f_lang: req.body.f_lang,
        comment: req.body.comment
    };
    resp.redirect('/result',{data:data});
});

app.get('/result', data, (req,resp)=>{
    const data = data;
    resp.render('results',{data:data});
});

app.listen(8000, ()=>{
    console.log("Listening on port 8000.")
});
app.use(express.static(__dirname + "/static"));
