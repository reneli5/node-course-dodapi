// const mongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectId } = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {

    if (error) {
        return console.log("Unable to cmnnect to mongo");
    }

    const db = client.db("TodoApp");

    db.collection("ToDos").findOneAndUpdate(
        {
            _id: new ObjectId("5b289317b8ac55a0d55cb474")
        }, {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(JSON.stringify(result));
    } )
    // client.close();
})