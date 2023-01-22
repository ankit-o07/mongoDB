const mongoose = require("mongoose");
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1/fruitsDB");

const personSchema = new mongoose.Schema({
    name: String,
    age : Number,
    
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name : "Johne",
    age : 37,
    
});

const kiwi = new 



person.save();




