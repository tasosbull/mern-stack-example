import { MongoClient, ServerApiVersion } from "mongodb";

//const URI = process.env.ATLAS_URI || "mongodb://localhost:5532/mydb";
//var MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://127.0.0.1:27017/mydb", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
