const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2},
    f_food: {type:String, required: true, minlength:2},
    h_spots:[]

}, {timestamps:true }

);

const Cat = mongoose.model('Cat', CatSchema);

module.exports= CatSchema, Cat;