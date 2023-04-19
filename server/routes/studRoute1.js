const express = require("express");
const router = express.Router();
const studController = require("../controllers/studController");
const {protect} = require("../controllers/authController");

router.patch("/update", protect, studController.updateStud);

router.post("/subSolution",protect,async (req,res) =>{ 
  // ## --
  const {solution, questionId} = req.body
  const {_id} = req.student
  try{
    let data = await studController.insertSolutions(questionId,_id,solution)
    res.send(data)
  }catch(err){
    res.status(400).send(true)
  }
})

router.post("/getStudentSubmition",protect,async (req,res) =>{ 
  const {_id} = req.student
  try{
    let data = await studController.getStudentSubmitions(_id)
    res.send(data)
  }catch(err){
    res.status(400).send(true)
  }
})

router.get("getAllQuestions",protect,async (req,res)=>{
  // -- 
  try {
    const data = await studController.getAllQuestions()
    res.json(data)
  }catch(err){
    console.log(err)
    res.status(400)
  }
})

router.post("/apply",protect,(req,res)=>{

  

})

// update
// sub solution
// get student submition

module.exports = router;
