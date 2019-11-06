const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2},

}, {timestamps:true }

);

const Person = mongoose.model('Person', PersonSchema);

module.exports= PersonSchema, Person;