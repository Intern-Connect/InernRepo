const Student = require("../models/students");
const Company = require("../models/company");
const Question = require("../models/questions");


const insertQuestion = async (data) =>{
    // ##
    let {companyId} = data
    try {
        let res = await Question.create({...data})
        await Company.updateOne({_id:companyId},{$push:{posts:res._id}})
        return true

    }catch(err){
        return false
    }
}

const getCompanyQuestions = async (posts) =>{
    try {
        let response = []
        for(let _id in posts){
            const data = await Question.findOne({_id})
            response.push(data)
        }
    }
}

module.exports = {
    insertQuestion
}

