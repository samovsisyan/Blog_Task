const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  try{

      res.send('respond with a resource');

  }catch (e) {
      next(e)
  }

});

module.exports = router;
