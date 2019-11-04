/////////// Setting Server & Dependencies ////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.listen(8000);
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

const QuoteSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2},
    quote: {type:String, required: true, minlength:5}
}, {timestamps:true }

);

const Quote = mongoose.model('Quote', QuoteSchema);

//////////// Routes //////////////
app.get('/', (req,resp)=>{
    resp.render('index');
});

app.get('/quotes', (req,resp)=>{
    Quote.find()
        .then(data=> {
            resp.render('quotes', {quotes:data})
        })
        .catch(err=> err.throw(resp.json(err)));
});

app.post('/newQuotes',(req,resp)=>{
    const quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save()
        .then(newQuoteData => {
            console.log("quote created: "+ newQuoteData);
        resp.redirect('/quotes')})
        .catch(err => console.log(err));


});
