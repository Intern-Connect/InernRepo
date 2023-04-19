const express = require("express");
const router = express.Router();
const { updateStud, upload, getAllQuestions,insertSolutions } = require("../controllers/studController");
const authController = require("../controllers/authController");

router.patch(
	"/update",
	authController.protect,
	upload.fields([
		{ name: "picture", maxCount: 1 },
		{ name: "resume", maxCount: 1 },
	]),
	updateStud
);


// get questions

router.get("/getAllQuestions",authController.protect,async (req,res)=>{ 
	try { 
	  const data = await getAllQuestions() 
	  res.json(data) 
	}catch(err){ 
	  console.log(err) 
	  res.status(400) 
	} 
  })

// submit queistions
router.post("/subSolution/:id",authController.protect,async (req,res) =>{  
	// ## 
	const {solution} = req.body 
	const {_id} = req.student 
	try{ 
	  let data = await insertSolutions(req.params.id,_id,solution) 
	  res.send(data) 
	}catch(err){ 
	  res.status(400).send(true) 
	} 
  })
module.exports = router;
