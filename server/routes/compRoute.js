const express = require("express");
const router = express.Router();
const compController = require("../controllers/compController")

router.post("/insertQuestion",async (req,res) =>{ 
    // ###
    try {
      let data = await compController.insertQuestion({...req.body})
      if (data == false) throw "something goes wrong"
      res.send(data)
    }catch(err){
      console.log(err)
      res.status(404).send("error")
    }
    
})

router.post("/getCompanyQuestions",(req,res)=>{
   
})

module.exports = router; 