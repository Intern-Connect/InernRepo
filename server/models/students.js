const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: [true, "email already exists in database!"],
		required: [true, "please enter your email"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please add a valid email",
		],
	},
	about: {
		type: String,
		required: false,
	},
	skill: {
		type: [String],
		default: [],
	},
	firstName: {
		type: String,
		required: [true, "please enter your first name"],
		trim: true,
	},
	lastName: {
		type: String,
		required: [true, "please enter your last name"],
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	resume: {
		type: String,
		required: false,
	},
	picture: {
		type: String,
		required: false,
	},
	portfolio: {
		type: String,
		required: false,
	},
	category: {
		type: String,
		required: [true, "please enter your category"],
	},
	solved: {
		type: [String],
		default: [],
	}
},{
  timestamps: true,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
