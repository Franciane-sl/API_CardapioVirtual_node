const CategoryService = require('../service/CategoryService');

class CategoryController {
  async create(req, res, next) {
    try {
      const { nome, descricao } = req.body;

      const category = await CategoryService.create({
        nome,
        descricao
      });

      return res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      const categories = await CategoryService.findAll();
      return res.json(categories);
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;

      const category = await CategoryService.findById(id);
      return res.json(category);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;

      const category = await CategoryService.update(id, {
        nome,
        descricao
      });

      return res.json(category);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;

      await CategoryService.delete(id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
