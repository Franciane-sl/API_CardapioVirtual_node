const ProductService = require('../Service/ProductService')

class ProductController {
  async create(req, res, next) {
    try {
      const { nome, descricao, preco, imagemurl, ativo, categoryNome } = req.body;

      const product = await ProductService.create({
        nome,
        descricao,
        preco,
        imagemurl,
        ativo,
        categoryNome
      });

      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      const products = await ProductService.findAll();
      return res.json(products);
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductService.findById(id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, descricao, preco, imagemurl, ativo, categoryNome } = req.body;

      const product = await ProductService.update(id, {
        nome,
        descricao,
        preco,
        imagemurl,
        ativo,
        categoryNome
      });

      return res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;

      await ProductService.delete(id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
