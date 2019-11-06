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


mongoose.connect('mongodb://localhost/message_board', 
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex: true}
);

mongoose.connection.once('connected', () => console.log("connected to Mongo DB"));

////////////// DB Models ////////////

const CommentSchema = new mongoose.Schema({
    name:{type: String, required: [true,"Name must be at least 2 characters."], minlength: 2, trim: true},
    text: {type:String, required: [true,"Message must be at least 5 characters."], minlength:5, trim: true},
    message: {type: Schema.Types.ObjectId,
    ref: "Message"}
}, {timestamps:true }

);


const MessageSchema = new mongoose.Schema({
    name:{type: String, required: [true,"Name must be at least 2 characters."], minlength: 2, trim: true},
    text: {type:String, required: [true,"Message must be at least 10 characters."], minlength:10, trim: true},
    comments: [CommentSchema],
}, {timestamps:true }

);

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

//////////// Routes //////////////
app.get('/', (req,resp)=>{
    Message.find()
        .then(data=> {
            resp.render('index', {messages:data,moment:moment})
        })
        .catch(err=> err.throw(resp.json(err)));
});

app.post('/messages', (req,resp)=>{
    
    Message.create(req.body)
    .then(()=>{ resp.redirect('/')})
    .catch(err => console.log(err));

});

app.post('/comments/new/:id', (req,resp)=>{
    const newComment = new Comment();
    newComment.name = req.body.name;
    newComment.text = req.body.text;
    newComment.save()
    .then(
        Message.findOneAndUpdate({_id:req.params.id}, {$push: {comments : newComment}}, (err)=>{
        if(err){console.log(err);}
        else{resp.redirect('/')}
        
    }))
    .catch(
        err => console.log(err)
    );

});

