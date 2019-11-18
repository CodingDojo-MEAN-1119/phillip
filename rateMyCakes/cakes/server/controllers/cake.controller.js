const Cake = require('mongoose').model('Cake');

const { Http } = require('@status/codes');

module.exports = {

  index(request, response) {
    Cake.find({})
    .then(cakes => response.json(cakes))
    .catch(error => response.status(Http.InternalServerError).json(error));
  },

  create(request, response) {
    Cake.create(request.body)
    .then(cakes => response.json(cakes))
    .catch(error => {
      const errors = Object.keys(error.errors).map( key=> error.errors[key].message);
      response.status(Http.UnprocessableEntity).json(errors);
    });
  },

  show(request, response) {
    const {cake_id: cakeID } = request.params;
    Cake.findById(cakeID)
    .then(cake => {
      if (!Cake){
        throw new Error(`Cake with id: ${cakeID} not found.`);
      }
      response.json(book);
    })
    .catch(error => {
      response.status(Http.NotFound).json(error);
    })
  },

  update(request, response) {
    const {cake_id: cakeID } = request.params;
    Cake.findByIdAndUpdate(cakeID, request.body, { new : true, runValidators: true })
    .then(createCake => response.json(createCake))
    .catch(error => {
      const errors = Object.keys(error.errors).map( key=> error.errors[key].message);
      response.status(Http.UnprocessableEntity).json(errors);
    });
  },

  destroy(request, response) {
    const {cake_id: cakeID } = request.params;
    Cake.findByIdAndRemove(cakeID)
    .then(cake => response.json(cake))
    .catch(error => {
      response.status(Http.NotFound).json(error);
    })
  },


}
