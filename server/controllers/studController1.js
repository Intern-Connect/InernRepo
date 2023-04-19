const Student = require("../models/students")
const Question = require("../models/questions")
const Solution = require("../models/solutions")
const Company = require("../models/company")



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

// const getQuestionDetail = async (_id) => {
//     try {
//         let res = await Question.findOne({_id})
//         return res
//     }catch(err ){
//         return false
//     }
// }

const insertSolutions = async (problemId,studentId,solution,) =>{
    try{
        const res = await Solution.create(problemId,studentId,solution)
        if (rew._id == null) throw "can't create solution"
        await Student.updateOne({_id},{$push:{pending:res._id}})
        return true

    }catch(err ){
        console.log(err)
        return false
    }
}
//butumima
const getStudentSubmitions = async (id) => {
    // ##
    try {
        let res = await Solution.find({studentId:id})
        return res
    }catch(err ){
        console.log(err)
        return false
    }
}

const getAllQuestions = async () => {

    try {
        const data = await Questions.find()
        return data
    } catch( err ){
        return false
    }

}

module.exports = {
    updateStud,
    insertSolutions,
    getStudentSubmitions,
    getAllQuestions
}
