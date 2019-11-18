const mongoose = require('mongoose');

const { Schema } = mongoose;

console.log("Model has loaded.")

const PetSchema = new Schema({

  name:{
    type: String,
    trim: true,
    required: [true, "Please provide a valid name."],
    minlength: [3, "Please provide a valid name."],
    unique: [true, "Sorry, that pet is already in the shelter database."]
  },
  type:{
    type:String,
    trim: true,
    minlength: [3, "Please provide a valid type."],
    required: [true, "Please provide a valid type."],
  },
  description:{
    type:String,
    trim: true,
    minlength: [3, "Please provide a valid description."]
  },
  skill1:{
    type: String,
    maxlength: [155, "Please provide a shorter skill description."]
  },
  skill2:{
    type: String,
    maxlength: [155, "Please provide a shorter skill description."]
  },
  skill3:{
    type: String,
    maxlength: [155, "Please provide a shorter skill description."]
  },
  likes:{
    type: Number,
    trim: true,
    default: 0,
  }

}, { timestamps: true }
);

function arrayLimit(val){
  return val.length <=3;
}

module.exports = mongoose.model('Pet', PetSchema);

