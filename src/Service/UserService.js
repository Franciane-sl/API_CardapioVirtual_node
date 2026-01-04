const bcrypt = require('bcrypt');
const User = require('../models/User');
const AppError = require('../errors/AppError');

class UserService {
  async create({ nome, email, senha, tipo }) {
    if (!nome) throw new AppError('O nome do usuário é obrigatório.', 400);
    if (!email) throw new AppError('O email é obrigatório.', 400);
    if (!senha) throw new AppError('A senha é obrigatória.', 400);
    if (!tipo) throw new AppError('O tipo do usuário é obrigatório.', 400);

    const userExists = await User.findOne({ where: { email } });
    if (userExists) throw new AppError('Já existe um usuário com este email.', 409);

    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await User.create({
      nome,
      email,
      senha: hashedPassword,
      tipo
    });

    return user;
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    const user = await User.findByPk(id);
    if (!user) throw new AppError('Usuário não encontrado.', 404);
    return user;
  }

  async update(id, { nome, email, senha, tipo }) {
    const user = await this.findById(id);

    if (email && email !== user.email) {
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) throw new AppError('Este email já está em uso.', 409);
    }

    if (nome) user.nome = nome;
    if (email) user.email = email;
    if (senha) user.senha = await bcrypt.hash(senha, 10);
    if (tipo) user.tipo = tipo;

    await user.save();
    return user;
  }

  async delete(id) {
    const user = await this.findById(id);
    await user.destroy();
    return { message: 'Usuário removido com sucesso.' };
  }
}

module.exports = new UserService();
