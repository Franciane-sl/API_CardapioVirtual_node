const { Router } = require('express');
const CategoryController = require('./service/CategoryController')

const categoryRoutes = Router();

categoryRoutes.post('/', CategoryController.create);
categoryRoutes.get('/', CategoryController.findAll);
categoryRoutes.get('/:id', CategoryController.findById);
categoryRoutes.put('/:id', CategoryController.update);
categoryRoutes.delete('/:id', CategoryController.remove);

module.exports = categoryRoutes;
