const Category = require('../../models/Category');
const AppError = require('../../errors/AppError');

class CategoryService {
  async create({ nome, descricao }) {
    if (!nome) {
      throw new AppError('O nome da categoria é obrigatório.', 400);
    }

    const categoryExists = await Category.findOne({
      where: { nome }
    });

    if (categoryExists) {
      throw new AppError('Esta categoria ja existe.', 409);
    }

    const category = await Category.create({
      nome,
      descricao
    });

    return category;
  }

  async findAll() {
    return await Category.findAll();
  }

  async findById(id) {
    const category = await Category.findByPk(id);

    if (!category) {
      throw new AppError('Categoria não encontrada.', 404);
    }

    return category;
  }
}

module.exports = new CategoryService();
