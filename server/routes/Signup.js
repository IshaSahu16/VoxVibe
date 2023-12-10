const express = require("express")
const router = express.Router()
// const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('../models/Employee.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const dotenv = require("dotenv");
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

router.post('/', async (req, res) => {
    try {
        //get all data from body
        const { name, email, password } = req.body
        //all the data should exist
        if (!(name && email && password)) {
            res.status(400).send('All fields are compulsory')
        }
        //check if the user already exists
        const existingEmployeeModel = await EmployeeModel.findOne({ email })
        if (existingEmployeeModel) {
            res.status(401).send('User already exists with this email')
        }
        //encrypt the password
        const myEncPassword = await bcrypt.hash(password, 10)
        //save the user in DB
        const user = await EmployeeModel.create({
            name,
            email,
            password: myEncPassword
        })
        //generate a token for user and send it
        const token = jwt.sign(
            { id: user._id, email },
            'process.env.SECRET_KEY', 
            {
                expiresIn: "2h"
            }
        );
        user.token = token
        user.password = undefined

        res.status(201).json(user)

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;