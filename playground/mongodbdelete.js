// const mongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectId } = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {

    if (error) {
        return console.log("Unable to cmnnect to mongo");
    }

    const db = client.db("TodoApp");

    // db.collection("ToDos").deleteMany({text: undefined}).then((result) => {
    //     console.log(result);
    // })

    //delete many
    // db.collection("ToDos").deleteOne({text: "Eat Lunch"}).then((result) => {
    //     console.log(result)
    // })
    //find one and delete
    db.collection("ToDos").findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })
    // client.close();
})