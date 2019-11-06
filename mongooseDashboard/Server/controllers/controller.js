const mongoose = require('mongoose');
const Cat = mongoose.model('Cat');
const bodyParser = require('body-parser')

module.exports= {

    findAll: function(req,resp){
        Cat.find()
        .then(data=> {
            resp.render('index', {cats:data})
        })
        .catch(err=> err.throw(resp.json(err)));
    },

    create: function(req,resp){
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

    },

    display: function(req,resp){
        Cat.find({_id: req.params.id}, (err,response)=>{
            if(err){console.log(err);}
            resp.render('show', {cat:response[0]})
        })
    },

    showEdit: function(req,resp){
        Cat.find({_id: req.params.id}, (err,response)=>{
            if(err){console.log(err);}
            resp.render('edit', {cat:response[0]})
        })
    },

    processEdit: function(req,resp){
        Cat.updateOne({_id: req.params.id}, req.body, (err,response)=>{
            if(err){console.log(err);}
            resp.redirect(`/cats/${req.params.id}`)
        })
    },

    delete: function(req,resp){
        Cat.deleteOne({_id: req.params.id}, req.body, (err,response)=>{
            if(err){console.log(err);}
            resp.redirect(`/`);
        })
    },

}