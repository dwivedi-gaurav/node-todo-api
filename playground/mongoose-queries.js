var {ObjectID}=require('mongodb');

var {mongoose}=require('../server/db/mongoose');
var {Todo}=require('../server/models/todo');

var id="5c8370eb9604fa74dd478b68000";

if(!ObjectID.isValid(id)){
  console.log("Invalid ObjectID");
}

Todo.find({                                        //Returns a array of documents
  _id:id                                          //works with MONGOOSE but it doesn't work with mongodb native driver
}).then((todos)=>{
  console.log('Todos',todos);
},(err)=>{
  console.log("Unable to fetch Todos",err);
});


Todo.findOne({                                        //Returns a single documents
  _id:id                                          //works with MONGOOSE but it doesn't work with mongodb native driver
}).then((todos)=>{
  console.log('Todos',todos);
},(err)=>{
  console.log("Unable to fetch Todos",err);
});

Todo.findById(id).then((todos)=>{                   //Returns a single documents
console.log('Todos By ID',todos);
},(err)=>{
console.log("Unable to fetch Todos",err);
})
