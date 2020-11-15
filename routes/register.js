var express = require('express');
var router = express.Router();
const db = require("../db/database.js");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.use(bodyParser.json());

// Test routes
router.get("/", function(req, res) {
    const data = {
        data: {
            msg: "Got a GET request, sending back default 200"
        }
    };
    res.json(data);
});

router.post("/", (req, res) => {
    console.log(req.body.email + "bend");
    console.log(req.body.password + "bend");

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        db.run("INSERT INTO users (email, password) VALUES (?, ?)",
            req.body.email,
            hash, (err) => {
                if (err) {
                    console.log(err);
                }
                res.status(201).json({
                    data: {
                        msg: "Got a POST request, sending back 201 Created"
                    }
                });
            });
    });
});

// Should return No content status
router.put("/", (req, res) => {
    res.status(204).send();
});

router.delete("/", (req, res) => {
    res.status(204).send();
});

module.exports = router;