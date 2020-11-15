var express = require('express');
var router = express.Router();
require("dotenv").config();
const db = require("../db/database.js");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY;

router.use(bodyParser.json());
router.use(express.json());

// Test route 
router.get("/", function(req, res) {
    const data = {
        data: {
            msg: "Got a GET request, sending back default 200"
        }
    }
    res.json(data);
});

router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(401).json({
            errors: {
                status: 401,
                source: "/login",
                title: "Email or password missing",
                detail: "Email or password missing in request"
            }
        });
    }

    db.get("SELECT * FROM users WHERE email = ?",
        email,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "/login",
                        title: "Database error",
                        detail: err.message
                    }
                });
            }

            if (rows === undefined) {
                return res.status(401).json({
                    errors: {
                        status: 401,
                        source: "/login",
                        title: "User not found",
                        detail: "User with provided email not found."
                    }
                });
            }

            const user = rows;

            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/login",
                            title: "bcrypt error",
                            detail: "bcrypt error"
                        }
                    });
                }

                if (result) {
                    let payload = { email: email };
                    let jwtToken = jwt.sign(payload, secret, { expiresIn: '1h' });

                    return res.json({
                        data: {
                            type: "success",
                            message: "User logged in",
                            user: payload,
                            token: jwtToken
                        }
                    });
                }

                return res.status(401).json({
                    errors: {
                        status: 401,
                        source: "/login",
                        title: "Wrong password",
                        detail: "Password is incorrect."
                    }
                });
            });
        });
});

module.exports = router;