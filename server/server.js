var express = require("express");
var bodyparser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/todo");

var app = express();
app.use(bodyparser.json());

app.post("/todos", (req, resp) => {
    
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        resp.send(doc);
    }, (error) => {
        resp.status(400).send(error);
    })
})

app.listen(3000, () => {
    console.log("Started listening on 3000");
})