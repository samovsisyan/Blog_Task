const express = require('express');
const router = express.Router();
const comments = require('../models/Comments');


/* GET comments listing. */
router.get('/', async (req, res, next) => {
    try{
        const comment = await comments.findAll({});
        res.json({
            status: 'ok',
            message: 'respond with a resource',
            comment,
        });

    }catch (e) {
        next(e)
    }

});

module.exports = router;
