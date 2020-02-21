const express = require('express');
const router = express.Router();


router.use('/users', require('./users'));
router.use('/blogs', require('./blogs'));
router.use('/comments', require('./comments'));
router.use('/auth', require('./auth'));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;




