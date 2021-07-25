// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL, 'mongodb://localhost:27017/bucketlistbuddy', { 
//   useNewUrlParser: true,
//   useCreateIndex: true, 
//   useUnifiedTopology: true 
// });

// const db = mongoose.connection;
// // database connection event
// db.on('connected', function () {
//   console.log(`Mongoose connected to:${db.host}:${db.port}`);
// });

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://bucketlistuser:isUE5CXKTGRqiPkW@cluster0.40ekg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(connected => {
    console.log("Mongodb atlas is working")
})
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});