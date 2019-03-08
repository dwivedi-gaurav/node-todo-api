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

// db.collection('Todos').findOneAndUpdate(
//   {
//     _id: new ObjectID("5c8126fe445e2282aaa1d14e")
//   },{
//     $set:{        //$set is a mongodb operator
//       completed:true
//     }
//   },{
//     returnOriginal:false
//   }).then((result)=>{
//     console.log(result);
// },(err)=>{
//   console.log('Unable to update the TODO',err);
// });

//Challenge

db.collection('Users').findOneAndUpdate(
  {
    _id: new ObjectID("5c7e79ad82bffa76b0d5f35e")
  },{
    $inc:{        //$set is a mongodb operator
      age:1
    },
    $set:{
      name:'Anshu Dwivedi'
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
},(err)=>{
  console.log('Unable to update the TODO',err);
});


  client.close();
});
