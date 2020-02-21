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
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const token = jwt.sign({id: User.id}, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        })

        User.create({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,

            }),


        res.status(200).send({auth: true, token: token});


    } catch (e) {
        next(e)
    }
});


router.get('/me', function(req, res,next) {
   try{

    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.status(200).send(decoded);

        // User.findById(decoded.id, function (err, user) {
        //     if (err) return res.status(500).send("There was a problem finding the user.");
        //     if (!user) return res.status(404).send("No user found.");
        //
        //     res.status(200).send(user);
        // });

    });

   }catch (e) {
       next(e)
   }
});


router.post('/login', function(req, res,next) {
        try{
    User.findOne({ where : { email: req.body.email } }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token });
    });
        }catch (e) {
            next(e)
        }
});




module.exports = router;

