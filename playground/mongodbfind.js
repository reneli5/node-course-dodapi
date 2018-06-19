// const mongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectId } = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {

    if (error) {
        return console.log("Unable to cmnnect to mongo");
    }

    const db = client.db("TodoApp");

    // db.collection("ToDos").find(
    //     {
    //         _id: new ObjectId("5b289448636956ddb4bd39eb")
    //     }
    // ).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // })

    db.collection("ToDos").find().count().then((count) => {
        console.log("Todos");
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log("Unable to fetch todos", err);
    })

    // client.close();
})