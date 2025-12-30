const Product = require('../models/Product');
const Category = require('../models/Category');
const AppError = require('../errors/AppError');

class ProductService {
  async create({ nome, descricao, preco, imagemurl, ativo, categoryNome }) {
   
    if (!nome) {
      throw new AppError('O nome do produto é obrigatório.', 400);
    }
    if (!preco) {
      throw new AppError('O preço do produto é obrigatório.', 400);
    }
    if (!categoryNome) {
      throw new AppError('O nome da categoria é obrigatório.', 400);
    }

    
    const category = await Category.findOne({ where: { nome: categoryNome } });
    if (!category) {
      throw new AppError(`Categoria "${categoryNome}" não encontrada.`, 404);
    }

    
    const product = await Product.create({
      nome,
      descricao,
      preco,
      imagemurl,
      ativo: ativo !== undefined ? ativo : true,
      category_id: category.id
    });

    return product;
  }

  async findAll() {
    return await Product.findAll({
      include: [{ model: Category, as: 'category' }]
    });
  }

  async findById(id) {
    const product = await Product.findByPk(id, {
      include: [{ model: Category, as: 'category' }]
    });

    if (!product) {
      throw new AppError('Produto não encontrado.', 404);
    }

    return product;
  }

  async update(id, { nome, descricao, preco, imagemurl, ativo, categoryNome }) {
    const product = await this.findById(id);

    if (nome) product.nome = nome;
    if (descricao) product.descricao = descricao;
    if (preco) product.preco = preco;
    if (imagemurl) product.imagemurl = imagemurl;
    if (ativo !== undefined) product.ativo = ativo;

    
    if (categoryNome) {
      const category = await Category.findOne({ where: { nome: categoryNome } });
      if (!category) {
        throw new AppError(`Categoria "${categoryNome}" não encontrada.`, 404);
      }
      product.category_id = category.id;
    }

    await product.save();
    return product;
  }

  async delete(id) {
    const product = await this.findById(id);
    await product.destroy();
    return { message: 'Produto deletado com sucesso.' };
  }
}

module.exports = new ProductService();
