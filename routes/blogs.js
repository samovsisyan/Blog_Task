const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const blogs = require('../models/Blogs');


/* GET blogs listing. */
router.get('/', async (req, res, next) => {
    try{
        const blog = await blogs.findAll({});
        res.json({
            status: 'ok',
            message: 'The whole blog is displayed',
            blog,
        });

    }catch (e) {
        next(e)
    }

});


router.put('/', async (req, res, next) => {
    try{
        const {
            title,
            description,
            short_description,
            created_at,
            img
        } = req.body;
        const blog = blogs.create({
            title,
            description,
            short_description,
            created_at,
            img
        });

        res.json({
            status: 'Create a blog',
            blog,
        })


    }catch (e) {
        next(e)
    }
});


router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            title,
            description,
            short_description,
            created_at,
            img
        } = req.body;
        await blogs.update({
            title,
            description,
            short_description,
            created_at,
            img
        }, {where: {id}});
        res.json({
            status: 'Blog updated',
            blogs: {
                id,
                title,
                description,
                short_description,
                created_at,
                img
            },
        });

    } catch (e) {
        next(e)
    }

});


router.delete('/', async (req, res, next) => {
    try {
        const blogID = req.param('id');
        await blogs.destroy({
            where: {
                "id": blogID
            }
        });

        res.json({
            status: 'ok',
            message: "Delete BlogId",
        })

        // if (blogID === null) {
        //     res.json({
        //         status: 'not_found',
        //     })
        // }
        // else {
        //
        // }

    } catch (e) {
        next(e)
    }
});


module.exports = router;
