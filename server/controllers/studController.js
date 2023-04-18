const Student = require("../models/students")



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

// const insertSolutions

module.exports = {
    getAllStud,
    getOneStudent,
    updateStud
}
