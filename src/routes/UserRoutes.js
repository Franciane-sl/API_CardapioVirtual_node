const { Router } = require('express');
const UserController = require('../controllers/UserController');

const userRoutes = Router();

userRoutes.post('/', UserController.create);
userRoutes.get('/', UserController.findAll);
userRoutes.get('/:id', UserController.findById);
userRoutes.put('/:id', UserController.update);
userRoutes.delete('/:id', UserController.remove);

module.exports = userRoutes;
