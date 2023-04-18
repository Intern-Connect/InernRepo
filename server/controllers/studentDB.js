const Student = require("../models/students")

const getAllStud = async () =>{
    let res = await Student.find()
    return res 
}

const getOneStudent = async (_id) =>{
    let res = await Student.findOne({_id})
    return res
}

// const insertSolutions

module.exports = {
    updateStud,getAllStud,
    getOneStudent
}
