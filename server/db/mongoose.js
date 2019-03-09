const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});

module.exports={
  mongoose
}
