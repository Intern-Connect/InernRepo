const mongoose = require('mongoose');
const Company = require('./company');

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
    number_of_intern: {
        type: Number,
        required: true
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Company
    }
},{timestamps:true})