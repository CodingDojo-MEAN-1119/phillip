/////////// Setting Server & Dependencies ////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.listen(8000, ()=> console.log("listening on port 8000."));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost/test_app', 
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex: true}
);

mongoose.connection.once('connected', () => console.log("connected to Mongo DB"));

////////////// DB Models ////////////

const CatSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2},
    f_food: {type:String, required: true, minlength:2},
    h_spots:[]

}, {timestamps:true }

);

const Cat = mongoose.model('Cat', CatSchema);

//////////// Routes //////////////
app.get('/', (req,resp)=>{
    Cat.find()
        .then(data=> {
            resp.render('index', {cats:data})
        })
        .catch(err=> err.throw(resp.json(err)));
});

app.get('/cats/new', (req,resp)=>{
   resp.render('add')
});

app.post('/cats',(req,resp)=>{
    const cat = new Cat();
    let spots=req.body.h_spots.toString().toLowerCase();
    let tempArr=spots.split(",");
    cat.name = req.body.name;
    cat.f_food = req.body.f_food;
    cat.h_spots =tempArr;
    cat.save()
        .then(catData => {
            console.log("cat created: "+ catData);
        resp.redirect('/')})
        .catch(err => console.log(err));

});

app.get('/cats/:id', (req,resp)=>{
    Cat.find({_id: req.params.id}, (err,response)=>{
        if(err){console.log(err);}
        resp.render('show', {cat:response[0]})
    })
});

app.get('/cats/edit/:id', (req,resp)=>{
    Cat.find({_id: req.params.id}, (err,response)=>{
        if(err){console.log(err);}
        resp.render('edit', {cat:response[0]})
    })
});

app.post('/cats/:id', (req,resp)=>{
    Cat.updateOne({_id: req.params.id}, req.body, (err,response)=>{
        if(err){console.log(err);}
        resp.redirect(`/cats/${req.params.id}`)
    })
});
app.get('/cats/destroy/:id', (req,resp)=>{
    Cat.remove({_id: req.params.id}, req.body, (err,response)=>{
        if(err){console.log(err);}
        resp.redirect(`/`);
    })
});