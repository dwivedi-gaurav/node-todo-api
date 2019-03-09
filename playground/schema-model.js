const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});
var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{           //unix timestamp
    type:Number ,
    default:null
  }
});

var User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

var newUser=new User({
  email:'gaurav@gmail.com'
});

newUser.save().then((doc)=>{
  console.log('Saved Todo',doc);
},(err)=>{
  console.log('Unable to save Todo.');
});

// var newTodo=new Todo({
//   text:'Cook Dinner'
// });

// var newTodo=new Todo({
//   text:'',
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo',doc);
// },(err)=>{
//   console.log('Unable to save Todo.');
// });
