const { Router } = require('express');
const AdressController = require('../controllers/AdressController');

const adressRoutes = Router();


adressRoutes.post('/', AdressController.create);
adressRoutes.get('/:user_id', AdressController.findByUser)
adressRoutes.put('/:user_id', AdressController.update);
adressRoutes.delete('/:user_id', AdressController.remove);

module.exports = adressRoutes;
