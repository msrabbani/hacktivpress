const Contr = require('../controllers/user-controllers')
var express = require('express');
var router = express.Router();

router.get('/', Contr.getAllUser)
router.get('/:id', Contr.getSingleUser)
router.delete('/:id', Contr.deleteUser)
router.put('/:id', Contr.updateUser)
router.post('/signup', Contr.createUser)
router.post('/signin', Contr.signin)

module.exports = router;
