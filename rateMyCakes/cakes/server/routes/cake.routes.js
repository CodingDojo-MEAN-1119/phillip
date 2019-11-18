const  CakeController  = require('../controllers/cake.controller');
const router = require('express').Router();

module.exports = router
  .get('/', CakeController.index)
  .post('/', CakeController.create)
  .get('/:cake_id', CakeController.show)
  .put('/:cake_id', CakeController.update)
  .delete('/:cake_id', CakeController.destroy);
