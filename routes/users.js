const express = require('express');
const router = express.Router();
const users = require('../models/Users');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  try{
      const user = await users.findAll({});
      res.json({
          status: 'ok',
          message: 'respond with a resource',
          user,
      });

  }catch (e) {
      next(e)
  }

});

module.exports = router;
