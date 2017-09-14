const Contr = require('../controllers/article-controllers')
var express = require('express');
var router = express.Router();

router.get('/', Contr.getAllArticle)
router.post('/', Contr.createArticle)
router.get('/:id', Contr.getSingleArticle)
// router.get('/:author', Contr.getByAuthor)
// router.get('/:category', Contr.getByCategory)
router.delete('/:id', Contr.deleteArticle)
router.put('/:id', Contr.updateArticle)

module.exports = router;
