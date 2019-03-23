var {ObjectID}=require('mongodb');
var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

var port=process.env.PORT||3000;

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
    return res.status(400).send();    //not sending err object intentionaly
  });
});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(400).send(`Invalid objectID ${id}`);
    return;
  }
  Todo.findByIdAndDelete(id).then((todo)=>{
    if(!todo){
      res.status(404).send(`Todo not found with id ${id}`);
      return;
    }
    res.send(todo);
  },(err)=>{
    res.status(400).send();
  });
});

app.listen(port,()=>{
  console.log(`Listening to port ${port}`);
});
