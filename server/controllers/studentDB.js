const Student = require("../models/students")

const updateStud = async (_id,obj) =>{
    try{
        let res = await Student.updateOne({_id},{...obj})
        console.log(res)
        return true
    }catch(err ){
        consoel.log(err)
        return false
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

// const insertSolutions

module.exports = {
    updateStud,getAllStud,
    getOneStudent
}
