const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee.js')
const BlogModel = require("./models/blogdata");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
// const morgan = require("morgan")

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
// app.use(morgan("dev"))

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => {
        console.log("mongodb connected")
    })

// app.post("/Login", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("Success")
//                 } else {
//                     res.json("the password is incorrect")
//                 }
//             } else {
//                 res.json("No record existed")
//             }
//         })
// })

app.get("/blog", (req, res) => {
    BlogModel
        .find()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post("/blogone", (req, res) => {
    const { kuch } = req.body
    BlogModel
        .findById(kuch)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            e
            res.json(err);
        });
});

app.post("/Blog", (req, res) => {
    BlogModel
        .create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

app.post('/Signup', async (req, res) => {
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
            'yrrrr',
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

app.post('/Login', async (req, res) => {
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
                'yrrrr',
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
                httpOnly: true
            };
            //send a token
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
            })
        }

    } catch (error) {
        console.log(error);
    }
})

// app.post('/Signup', (req, res) => {
//     console.log(req.body)
//     EmployeeModel.create(req.body)
//         .then(employees => res.json(employees))
//         .catch(err => res.json(err))
// })

app.listen(3001, () => {
    console.log("server is running")
})


