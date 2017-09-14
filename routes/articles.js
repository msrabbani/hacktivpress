const Contr = require('../controllers/article-controllers')
var express = require('express');
var router = express.Router();

router.get('/', Contr.getAllArticle)
router.post('/', Contr.createArticle)
router.get('/:id', Contr.getSingleArticle)
router.get('/:id', Contr.getByAuthor)
router.delete('/:id', Contr.deleteArticle)
router.put('/:id', Contr.updateArticle)

module.exports = router;
