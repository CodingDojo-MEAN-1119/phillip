const mongoose = require('mongoose');

const { Schema } = mongoose;

console.log("Model has loaded.")

const BookSchema = new Schema({

  title:{
    type: String,
    trim: true,
    required: [true, "Please provide a valid title."],
    minlength: [2, "Please provide a valid title."]
  },
  author:{
    type:String,
    trim: true,
    required: [true, "Please provide a valid author."],
  },
  year:{
    type:Number,
    trim: true,
    minlength: [2, "Please provide a valid year."]
  },
  pages:{
    type:Number,
    trim: true,
    minlength: [2, "Please provide a valid page range."]
  },
  publisher:{
    type:String,
    trim: true,
    required: [true, "Please provide a valid publisher."],
    minlength: [2, "Please provide a valid publisher."],
  },
}, { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);

