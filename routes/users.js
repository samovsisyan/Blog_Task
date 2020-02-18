const express = require('express');
const router = express.Router();
const users = require('../models/Users');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  try{
      const user = await users.findAll({});
      res.json({
          status: 'The whole comment is displayed',
          message: 'respond with a resource',
          user,
      });

  }catch (e) {
      next(e)
  }

});


router.put('/', async (req, res, next) => {
    try{
        const {
            username,
            password,
            email,
            role,
            img
        } = req.body;
        const user = users.create({
            username,
            password,
            email,
            role,
            img
        });

        res.json({
            status: 'Create a user',
            user,
        })


    }catch (e) {
        next(e)
    }
});


router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            username,
            password,
            email,
            role,
            img
        } = req.body;
        await users.update({
            username,
            password,
            email,
            role,
            img
        }, {where: {id}});
        res.json({
            status: 'User updated',
            users: {
                id,
                username,
                password,
                email,
                role,
                img
            },
        });

    } catch (e) {
        next(e)
    }

});


router.delete('/', async (req, res, next) => {
    try {
        const userID = req.param('id');
        await users.destroy({
            where: {
                "id": userID
            }
        });

        res.json({
            status: 'ok',
            message: "Delete UserID",
        })


    } catch (e) {
        next(e)
    }
});

module.exports = router;
