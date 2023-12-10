const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const dotenv = require("dotenv");
dotenv.config();

const signupRoute = require('./routes/Signup.js')
const loginRoute = require('./routes/Login.js')
const blogRoute = require('./routes/Blog.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use('/Signup', signupRoute);
app.use('/Login', loginRoute);
app.use('/', blogRoute);

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => {
        console.log("mongodb connected")
    })

app.listen(3001, () => {
    console.log("server is running")
})