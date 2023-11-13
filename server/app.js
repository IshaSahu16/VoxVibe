const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee.js')
const BlogModel = require("./models/blogdata");
// const morgan = require("morgan")

const app = express()
app.use(express.json())
app.use(cors())
// app.use(morgan("dev"))

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => {
        console.log("mongodb connected")
    })

app.post("/Login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

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
    const {kuch} = req.body
  BlogModel
    .findById(kuch)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {e
      res.json(err);
    });
});

app.post("/Blog", (req, res) => {
    BlogModel
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  });

app.post('/Signup', (req, res) => {
    console.log(req.body)
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})


