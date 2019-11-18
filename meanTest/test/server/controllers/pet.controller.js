const Pet = require('mongoose').model('Pet');

const { Http } = require('@status/codes');

module.exports = {

  index(request, response) {
    Pet.find({})
    .then(pets => response.json(pets))
    .catch(error => response.status(Http.InternalServerError).json(error));
  },

  create(request, response) {
    Pet.create(request.body)
    .then(pet => response.json(pet))
    .catch(error => {
      const errors = Object.keys(error.errors).map( key=> error.errors[key].message);
      response.status(Http.UnprocessableEntity).json(errors);
    });
  },

  show(request, response) {
    const {pet_id: petID } = request.params;
    Pet.findById(petID)
    .then(pet => {
      if (!pet){
        throw new Error(`Pet with id: ${petID} not found.`);
      }
      response.json(pet);
    })
    .catch(error => {
      response.status(Http.NotFound).json(error);
    })
  },

  update(request, response) {
    const {pet_id: petID } = request.params;
    Pet.findByIdAndUpdate(petID, request.body, { new : true, runValidators: true })
    .then(createdPet => response.json(createdPet))
    .catch(error => {
      const errors = Object.keys(error.errors).map( key=> error.errors[key].message);
      response.status(Http.UnprocessableEntity).json(errors);
    });
  },

  destroy(request, response) {
    const {pet_id: petID } = request.params;
    Pet.findByIdAndRemove(petID)
    .then(pet => response.json(pet))
    .catch(error => {
      response.status(Http.NotFound).json(error);
    })
  },


}
