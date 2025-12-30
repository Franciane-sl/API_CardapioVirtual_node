const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const productRoutes = Router();

productRoutes.post('/', ProductController.create);
productRoutes.get('/', ProductController.findAll);
productRoutes.get('/:id', ProductController.findById);
productRoutes.put('/:id', ProductController.update);
productRoutes.delete('/:id', ProductController.remove);

module.exports = productRoutes;
