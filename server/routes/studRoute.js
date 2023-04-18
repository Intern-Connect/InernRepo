const express = require("express");
const router = express.Router();
const studentDB = require('../controllers/studentDB');

router.patch("/update",async (req,res)=>{
    const {_id,obj} = req.body
    let response = await studentDB.updateStud(_id,obj)
    return res.send(response)
})


router.get("/getAll",async (req,res)=>{
    let response = await studentDB.getAllStud()
    return res.send(response)
})


router.get("/getOne",async (req,res)=>{
    let {_id} = req.body
    let response = await studentDB.getOneStudent({_id})
    return res.send(response)
})

router.post("/subSolution",async (req,res)=>{
    const {_id,solution,compId} = req.body
    // ## insert solution ##
    // solution, studentId , 
    // question,questionDiscription  
    // category , tag, companyId  
    // ## insert to student ##
    // 
    // insert solution
})




module.exports = router