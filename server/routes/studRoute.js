const express = require("express");
const router = express.Router();
const studController = require("../controllers/studController");
const {protect} = require("../controllers/authController");

router.patch("/update", protect, studController.updateStud);

router.post("/subSolution",protect,async (req,res) =>{ 
  const {solution, questionId} = req.body
  const {_id} = req.student
  try{
    
    let data = await studController.insertSolutions(questionId,_id,solution)
    // let queDetail = await studController.getQuestionDetail(questionId)
    // let compId = queDetail.companyId
    console.log(data)
    res.send(data)
  }catch(err){
    throw err  
  }
})

router.post("/insertQuestion",async (req,res) =>{ 
  try {
    let data = await studController.insertQuestion({...req.body})
    if (data == false) throw "something goes wrong"
    res.send(data)
  }catch(err){
    console.log(err)
    res.status(401).send("error")
  }
  
})


module.exports = router;
