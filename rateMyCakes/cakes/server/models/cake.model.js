const mongoose = require('mongoose');

const { Schema } = mongoose;

console.log("Cake model has loaded.")

const CakeSchema = new Schema({

  baker:{
    type: String,
    trim: true,
    required: [true, "Please provide a valid baker."],
    minlength: [2, "Please provide a valid baker."]
  },
  img:{
    type:String,
    trim: true,
    required: [true, "Please provide a valid image url."],
  },
  description:{
    type:String,
    trim: true,
    minlength: [2, "Please provide a valid description."]
  },
  rating:{
    type:Number,
    trim: true,
    min: 0,
    max: 5,
  },
}, { timestamps: true }
);

module.exports = mongoose.model('Cake', CakeSchema);

