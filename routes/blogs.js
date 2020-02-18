const express = require('express');
const router = express.Router();
const blogs = require('../models/Blogs');


/* GET blogs listing. */
router.get('/', async (req, res, next) => {
    try{
        const blog = await blogs.findAll({});
        res.json({
            status: 'ok',
            message: 'respond with a resource',
            blog,
        });

    }catch (e) {
        next(e)
    }

});

module.exports = router;
