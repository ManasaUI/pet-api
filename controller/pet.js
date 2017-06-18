

Pet = require('./../models/pet.js');


var petCntrl = {
    getPets: function(req, res){
        Pet.getPets(function(err, pets){
            if(err){
                throw err;
            } 
            res.json(pets);
        });
    },

    deletePet: function(req, res){
        Pet.deletePet(req.params._id, function(err, pet){
            if(err){
                throw err;
            }
            res.json(pet);
        });
    },
    postPet: function(req, res){
        var pet = req.body;
        console.log(pet)
        Pet.addPet(pet, function(err, pet){
            if(err){
                throw err;
            }
            res.json(pet);
        });
    },
    putPet: function(req, res){
        var pet = req.body;
        Pet.updatePet(req.params._id, pet, {}, function(err, pet){
            if(err){
                throw err;
            }
            res.json(pet)
        });
    }
}


module.exports = petCntrl;