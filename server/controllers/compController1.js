const Student = require("../models/students");
const Company = require("../models/company");
const Question = require("../models/questions");


const insertQuestion = async (data,_id) =>{
    // ##
    try {
        let res = await Question.create({...data})
        await Company.updateOne({_id},{$push:{questions:res._id}})
        return true
    }catch(err){
        console.log(err)
        return false
    }
}

const getCompanyQuestions = async (_id) =>{
    // ##
    try {
        const data = await Company.findOne({_id}).populate('questions')
        return data.questions
    }catch(err ){
        return false
    }
}

module.exports = {
    insertQuestion,getCompanyQuestions
}

