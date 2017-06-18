var mongoose = require('mongoose');

//create schema for pet
var petSchema = mongoose.Schema({
    name:{
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type : String,
        required: false
    },
    owner: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }
});

//make the pet accessable out side
var Pet = module.exports = mongoose.model("Pet", petSchema);

//add pet
module.exports.addPet = function(pet, callback){
    Pet.create(pet, callback);
}

//get pets.
module.exports.getPets = function(callback, limit){
    Pet.find(callback).limit(limit);
}

//get pet by Id
module.exports.getPetById = function(id, callback){
    Pet.findById(id, callback);
}

//update pet by Id
module.exports.updatePet = function(id, pet, option, callback){
    var query = {_id: id};
    Pet.findByIdAndUpdate(query, pet, option, callback);
}

//delete pet
module.exports.deletePet = function(id, callback){
    var query = { _id: id };
    Pet.remove(query, callback);
}