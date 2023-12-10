const express = require("express")
const router = express.Router()
const cors = require("cors")
const BlogModel = require("../models/blogdata");
const cookieParser = require('cookie-parser')
const dotenv = require("dotenv");
dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

router.get("/blog", (req, res) => {
    BlogModel
        .find()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.post("/blogone", (req, res) => {
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


router.post("/Blog", (req, res) => {
    BlogModel
        .create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

module.exports = router;