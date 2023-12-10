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
        //get all data form frontend
        const { email, password } = req.body
        //validation
        if (!(email && password)) {
            res.status(400).send('send all data')
        }
        //find user in DB
        const user = await EmployeeModel.findOne({ email })
        //match the password
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { id: user._id },
                'process.env.SECRET_KEY',
                {
                    expiresIn: "2h"
                }
            );
            user.token = token
            user.password = undefined

            //send token in user cookie
            //cookie section
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true,
            };
            // send a token
            res.status(200).cookie('token', token, options).json({
                success: true,
                token,
            })
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;