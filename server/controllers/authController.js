const jwt = require("jsonwebtoken");
const Student = require("../models/students");

exports.signup = async (req, res) => {
	try {
		const student = await Student.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			category: req.body.category,
		});

		// Generate a JWT token
		const token = jwt.sign({ id: student._id }, "your-secret-key-here", {
			expiresIn: "1h",
		});

		// Send the token and student data in the response
		res.status(201).json({
			status: "success",
			token,
			student,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err,
		});
	}
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    const student = await Student.findOne({ email }).select("+password");

    if (!student || !(await student.correctPassword(password, student.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    const token = jwt.sign({ id: student._id }, "your-secret-key-here", {
			expiresIn: "1h",
		});


    res.status(200).json({
      status: "success",
      token,
      student,
    });

  }catch(err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}