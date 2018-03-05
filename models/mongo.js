
var mongoose    =   require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');
var mongoSchema =   mongoose.Schema;
var ObjectId = mongoSchema.ObjectId;

var userSchema  = {
  _id: ObjectId,
  name: String,
};
var itemsSchema  = {
  _id: ObjectId,
  title: String,
  userId:  [{ type: ObjectId, ref: 'users' }],
};

module.exports = mongoose.model('users', userSchema);
