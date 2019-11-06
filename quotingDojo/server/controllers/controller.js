const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const models = require('../models/models.js');
const bodyParser = require('body-parser')

module.exports = {

    findAll: function (req, resp) {
        Quote.find()
            .then(data=> {
                resp.render('quotes', {quotes:data})
            })
            .catch(err=> err.throw(resp.json(err)));
    },

    create: function(req, resp){
        // console.log(req);
        const quote = new Quote();
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
            .then(newQuoteData => {
            
            resp.redirect('/quotes')})
            .catch(err => {
                console.log(err);
                resp.redirect('/');
            });

    },


}