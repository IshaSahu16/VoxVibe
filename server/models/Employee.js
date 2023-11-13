const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = new mongoose.model("data", EmployeeSchema)
module.exports = EmployeeModel