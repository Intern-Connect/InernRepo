const Student = require("../models/students");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now());
	},
});

const upload = multer({ storage: storage });

const updateStud = async (req, res) => {
	try {
		const id = req.student.id;
		let imageUrl = "";

		if (req.files.picture) {
			const result = await cloudinary.uploader.upload(
				req.files.picture[0].path,
				{
					folder: "student",
				}
			);
			req.body.picture = result.secure_url;
		}

		if (req.files.resume) {
			const result = await cloudinary.uploader.upload(
				req.files.resume[0].path,
				{
					folder: "student",
				}
			);
			req.body.resume = result.secure_url;
		}

		const student = await Student.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(200).json({
			status: "success",
			student,
		});
	} catch (err) {
		console.log(err);
		return res.send(false);
	}
};

const getAllStud = async () => {
	let res = await Student.find();
	return res;
};

const getOneStudent = async (_id) => {
	let res = await Student.findOne({ _id });
	return res;
};

// const insertSolutions

module.exports = {
	getAllStud,
	getOneStudent,
	updateStud,
	upload,
};
