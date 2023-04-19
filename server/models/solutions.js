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
        status:{
            type : String,
            enum:{
                values : ['success',"pending","failed"],
            },
            default : "pending",
        }
        
    }
)




const Solution = mongoose.model("solution", solutionSchema);

module.exports = Solution;
