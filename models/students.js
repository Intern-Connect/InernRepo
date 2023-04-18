const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  gmail: {
    type: String,
    required: true
  },
  about:{
    type : String,
    required : false,
  },
  skill:{
    type : [String],
    default : [],
  },
  firstName : {
    type:String,
    defulat : ""
  },
  lastName : {
    type:String,
    defulat : ""
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
  portfolio: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  solved: {
    type: [String],
    default: []
  }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
