
var petController = require('./../controller/pet.js')


//set up routes
module.exports = function(app){
    app.get('/api/pets' , petController.getPets);
    app.delete('/api/pets/:_id', petController.deletePet);
    app.post('/api/pets', petController.postPet);
    app.put('/api/pets/:_id', petController.putPet);
}