// const User = require('../models/User')
const Article = require('../models/Article')

function createArticle(req,res){
   Article.create({
     title    : req.body.title,
     content  : req.body.content,
     category : req.body.category,
     author   : req.body.author
   }).then(dataArticle => {
     res.send(dataArticle)
   }).catch(error => {
     res.send(error)
   })
}

function getAllArticle(req,res){
  Article.find({}).then(dataArticle=>{
    res.send(dataArticle)
  }).catch(error=>{
    res.send(error)
  })
}

function getSingleArticle(req,res){
  Article.findById({'_id':req.params.id})
  .then(dataArticle=>{
    res.send(dataArticle)
  }).catch(error=>{
    res.send(error)
  })
}

// function getByAuthor(req,res){
//   Article.find({ author:req.body.author})
//   .then(dataArticle=>{
//     res.send(dataArticle)
//   }).catch(error=>{
//     res.send(error)
//   })
// }
//
// function getByCategory(req,res){
//   Article.find({category:req.body.category})
//   .then(dataArticle=>{
//     res.send(dataArticle)
//   }).catch(error=>{
//     res.send(error)
//   })
// }

function deleteArticle(req,res){
  Article.remove({"_id":req.params.id})
  .then(dataArticle=>{
    res.send("terhapus")
  }).catch(error=>{
    res.send(error)
  })
}

function updateArticle (req,res){
  let hash;
  if (req.body.password) {
    hash = bcrypt.hashSync(req.body.password, 8);
  }
  Article.find({_id:req.params.id})
  .then(dataArticle => {
    if (!hash) {
      hash = dataArticle[0].password
    } Article.update({_id: dataArticle[0]}, {
      $set: {
        title: req.body.title || dataArticle[0].title,
        content: req.body.content || dataArticle[0].content,
        category: req.body.category || dataArticle[0].category,
        author: req.body.author || dataArticle[0].author,
        updated_at: new Date()
      }
    }).then(dataUpdate => {
      res.send(dataUpdate)
    }).catch(err=>{
      res.send(err)
    })
  }).catch(err => {
    res.send(err)
  })
}

module.exports = {
  createArticle,
  getAllArticle,
  getSingleArticle,
  // getByAuthor,
  // getByCategory,
  deleteArticle,
  updateArticle
}
