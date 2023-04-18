const mongoose = require("mongoose")

const solutionSchema = mongoose.Schema(
    {
        problemId: {
            type: String,
            required: true,
        },
        studentId: {
            type: String,
            required: true,
        },
        solution: {
            type: String,
            required: true,
        },
        
    }
)