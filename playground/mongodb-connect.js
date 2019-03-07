//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //ES6 destructuring to create variable of object property.

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{  //Added { useNewUrlParser: true } because of deprication warning
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db=client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
  //  _id:123,
    name:'Gaurav Dwivedi',
    age:23,
    location:'Allahabad, India'
  },(err,result)=>{
    if(err){
      return console.log("Unable to insrt todo.",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    //console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
