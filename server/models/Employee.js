const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    token:  {
        type: String,
        default:null
    },
})

const EmployeeModel = new mongoose.model("data", EmployeeSchema)
module.exports = EmployeeModel