var mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var articleSchema = new Schema({
    title : String,
    content    : String,
    category : String,
    author: [{ type: Schema.Types.ObjectId, ref: 'users' }],
});

var Article = mongoose.model('User', articleSchema)
module.exports = User;
