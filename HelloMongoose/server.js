/////////// Setting Server & Dependencies ////////////

const express = require('express');
const app = express();
const server = app.listen(1337);
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/test_app', 
{useNewUrlParser:true},
{useUnifiedTopology: true},
{useCreateIndex: true}
);

mongoose.connection.once('connected', () => console.log("connected to Mongo DB"));

////////////// DB Models ////////////

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', UserSchema);

//////////// Routes //////////////
app.get('/', (req,resp)=>{
    User.find().pretty()
        .then(data=> {
            console.log(data);
            resp.render('index', {users : data})
        })
        .catch(err=> resp.json(err));
});

app.post('/users',(req,resp)=>{
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log("user created: "+ newUserData))
        .catch(err => console.log(err));

    resp.redirect('/');
});
