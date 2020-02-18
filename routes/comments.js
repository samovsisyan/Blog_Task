const express = require('express');
const router = express.Router();
const comments = require('../models/Comments');


/* GET comments listing. */
router.get('/', async (req, res, next) => {
    try{
        const comment = await comments.findAll({});
        res.json({
            status: 'The whole comment is displayed',
            message: 'respond with a resource',
            comment,
        });

    }catch (e) {
        next(e)
    }

});


router.put('/', async (req, res, next) => {
    try{
        const {
            name,
            description,
            user_id,
            blog_id,
            created_at
        } = req.body;
        const comment = comments.create({
            name,
            description,
            user_id,
            blog_id,
            created_at
        });

        res.json({
            status: 'Create a comment',
            comment,
        })


    }catch (e) {
        next(e)
    }
});


router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            name,
            description,
            user_id,
            blog_id,
            created_at
        } = req.body;
        await comments.update({
            name,
            description,
            user_id,
            blog_id,
            created_at
        }, {where: {id}});
        res.json({
            status: 'Comment updated',
            comments: {
                id,
                name,
                description,
                user_id,
                blog_id,
                created_at
            },
        });

    } catch (e) {
        next(e)
    }

});


router.delete('/', async (req, res, next) => {
    try {
        const commentID = req.param('id');
        await comments.destroy({
            where: {
                "id": commentID
            }
        });

        res.json({
            status: 'ok',
            message: "Delete CommentsId",
        })


    } catch (e) {
        next(e)
    }
});




module.exports = router;
