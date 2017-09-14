const Contr = require('../controllers/user-controllers')
var express = require('express');
var router = express.Router();

router.get('/', Contr.getAllUser)
router.get('/:id', Contr.getSingleUser)
router.post('/', Contr.createUser)
router.delete('/:id', Contr.deleteUser)
router.put('/:id', Contr.updateUser)
router.post('/login', Contr.login)

module.exports = router;
