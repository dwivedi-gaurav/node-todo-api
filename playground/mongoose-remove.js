var {ObjectID}=require('mongodb');

var {mongoose}=require('../server/db/mongoose');
var {Todo}=require('../server/models/todo');

// var id="5c8370eb9604fa74dd478b68000";
//
// if(!ObjectID.isValid(id)){
//   console.log("Invalid ObjectID");
// }

// Todo.deleteMany({}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log('Unable to delete records',err);
// })

Todo.findByIdAndDelete('5c8b996a3166a7180f7223ef').then((result)=>{
  console.log(result);
},(err)=>{
  console.log('Unable to delete TODO',err);
});
