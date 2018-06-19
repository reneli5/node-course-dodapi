// const mongoClient = require("mongodb").MongoClient
const {MongoClient, ObjectId} = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) =>{

    if(error){
        return console.log("Unable to cmnnect to mongo");
    }

    const db = client.db("TodoApp");

    console.log("Connected to mongodb server...");

    db.collection("ToDos").insertOne({
        "text": "Eat Lunch",
        "completed": false
    }, (error, result) => {
        if(error){
            return console.log("Unable to insert todo ", error);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    })

    client.close();
})