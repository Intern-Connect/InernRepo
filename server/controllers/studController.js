const Student = require("../models/students")
const Question = require("../models/questions")
const Solution = require("../models/solutions")



const updateStud = async (req, res) => {
    try {
        const id = req.student.id

       const student =  await Student.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        
        res.status(200).json({
            status: "success",
            student
        })
        
    } catch (err) {
        console.log(err)
        return res.send(false)
    }
}

const getAllStud = async () =>{
    let res = await Student.find()
    return res
}

const getOneStudent = async (_id) =>{
    let res = await Student.findOne({_id})
    return res
}

const getQuestionDetail = async (_id) => {
    try {
        let res = await Question.find({_id})
        if(res.length > 0){
            return [true,res[0]]
        }
        return [false]
    }catch(err ){
        return [false]
    }
}

const insertSolutions = async (problemId,studentId,solution) =>{
    try{
        const res = await Solution.create(problemId,studentId,solution)
        return false

    }catch(err ){
        console.log(err)
        return false
    }
}


const insertStudentSolution = async (_id,questionId,solutionId) =>{
    try {
        let solve = {questionId:solutionId}
        const res = await Student.updateOne({_id},{$push:{solved:solve}})
        return true
    }catch(err){
        console.log(err)
        return false
    }
}

const insertQuestion = async (question) =>{
    try {
        let data = await Question.create({...question})
        return data
    }catch(err){
        return false
    }
}

// const 



module.exports = {
    getAllStud,
    getOneStudent,
    updateStud,
    getQuestionDetail,
    insertSolutions,
    insertStudentSolution,
    insertQuestion
}
