const mongoose = require('mongoose');
const Company = require('./company');
const Question = require('./questions');

const jobSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tag: {
        type: [String],
        required: true
    },
    desc: {
        type:String,
    },
    numberOfIntern: {
        type: Number,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Company
    },
    questions:{
        type : [ mongoose.Schema.Types.ObjectId],
        default : [],
        ref:Question
    },
    appliers:{
        type : [ mongoose.Schema.Types.ObjectId],
        default : [],
        ref:Question
    }
},{timestamps:true})


module.exports = jobSchema