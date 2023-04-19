const express = require("express");
const router = express.Router();
const compController = require("../controllers/compController")

router.post("/insertQuestion",async (req,res) =>{ 
    // ###
    let { _id } = req.company
    try {
      let data = await compController.insertQuestion(req.body,_id)
      if (data == false) throw "something goes wrong"
      res.send(data)
    }catch(err){
      console.log(err)
      res.status(404).send("error")
    }
    
})

router.post("/getCompanyQuestions",async (req,res)=>{
  // ##
  const { compId } = req.company 
  try {
    const data = await compController.getCompanyQuestions(compId)
    res.json(data)

   }catch(err) {
      res.status(400).send(false)
   }
})

// post job
// insert question
// get comany questions
// accept and reject solution
// po

module.exports = router; 