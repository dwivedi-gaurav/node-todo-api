var {ObjectID}=require('mongodb');
var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);  // status 400 for bad request
  })
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.status(400).send(err);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(400).send(`Invalid ObjectID ${id}`);
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send(`Todo not found with id ${id}`);
    }
    res.send({todo});
  },(err)=>{
    return res.status(400).send();    //not sending err object ontentionaly
  });
});

app.listen(3000,()=>{
  console.log('Listening to port 3000');
});
