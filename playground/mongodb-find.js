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

  //toArray() Cursor function
  //=======================================
  // db.collection('Todos').find({_id:new ObjectID('5c80b70c445e2282aaa1c234')}).toArray().then((docs)=>{                        //toArray() returns a promise
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch Todos',err);
  // });

  //count() cursor function
  //=======================================
  db.collection('Todos').find().count().then((count)=>{                        //toArray() returns a promise
    console.log(`Todos count: ${count}`);
  },(err)=>{
    console.log('Unable to fetch Todos',err);
  });
  client.close();
});
