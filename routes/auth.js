const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
const User = require('../models/Users');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');


router.post('/register', function (req, res,next) {
    try {
        console.log(config.secretKey,11111111111)
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const token = jwt.sign({id: User.id}, config.secretKey, {
            expiresIn: 86400 // expires in 24 hours
        })

        User.create({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,

            }),


        res.status(200).send({auth: true, token: token});



        // function (err, user) {
            //     if (err) return res.status(500).send("There was a problem registering the user.")
            //     // create a token
            //
            // });

    } catch (e) {
        next(e)
    }
});


module.exports = router;

