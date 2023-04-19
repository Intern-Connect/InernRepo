const express = require("express");
const router = express.Router();
const studController = require("../controllers/studController");
const {protect} = require("../controllers/authController");

router.patch("/update", protect, studController.updateStud);

router.post("/subSolution",protect,async (req,res) =>{ 
  // ##
  const {solution, questionId} = req.body
  const {_id} = req.student
  try{
    let data = await studController.insertSolutions(questionId,_id,solution)
    res.send(data)
  }catch(err){
    res.status(400).send(true)
  }
})

router.get("/getStudentSubmition",protect,async (req,res) =>{ 
  // ##
  const {_id} = req.student
  try{
    let data = await studController.getStudentSubmitions(_id)
    res.send(data)
  }catch(err){
    res.status(400).send(true)
  }
})




module.exports = router;
