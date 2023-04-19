const express = require("express");
const router = express.Router();
const {protect} = require("../controllers/companyAuth");
const campController = require("../controllers/campController")

router.post("/insertQuestion",protect,async (req,res) =>{  
    // ###  finished  ###
    let { _id } = req.company 
    req.body.companyId = _id
    console.log(req.body," ---- ")
    try { 
      let data = await campController.insertQuestion(req.body,_id) 
      if (data == false) throw "something goes wrong" 
      res.send(data) 
    }catch(err){ 
      console.log(err) 
      res.status(404).send("error") 
    } 
     
})

router.get("/getCompanyQuestions",protect,async (req,res)=>{ 
    // ## 
    const { _id } = req.company  
    try { 
      const data = await campController.getCompanyQuestions(_id) 
      res.json(data) 
   
     }catch(err) { 
        res.status(400).send(false) 
     } 
  })

module.exports = router;