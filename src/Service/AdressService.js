const Adress = require('../models/Adress');
const User = require('../models/User');
const AppError = require('../errors/AppError');

class AdressService {
  async create({ user_id, rua, numero, complemento, bairro, cep, telefone }) {
    
    const user = await User.findByPk(user_id);
    if (!user) {
      throw new AppError('Usuário não encontrado.', 404);
    }

    
    if (user.tipo !== 'CLIENTE') {
      throw new AppError('Apenas usuários do tipo CLIENTE podem ter endereço.', 403);
    }

    const existingAdress = await Adress.findOne({ where: { user_id } });
    if (existingAdress) {
      throw new AppError('Usuário já possui um endereço cadastrado.', 409);
    }

    const adress = await Adress.create({
      user_id,
      rua,
      numero,
      complemento,
      bairro,
      cep,
      telefone
    });

    return adress;
  }

  async findByUser(user_id) {
    const adress = await Adress.findOne({ where: { user_id } });
    if (!adress) {
      throw new AppError('Endereço não encontrado para este usuário.', 404);
    }
    return adress;
  }

  async update(user_id, { rua, numero, complemento, bairro, cep, telefone }) {
    const adress = await this.findByUser(user_id);

    if (rua) adress.rua = rua;
    if (numero) adress.numero = numero;
    if (complemento) adress.complemento = complemento;
    if (bairro) adress.bairro = bairro;
    if (cep) adress.cep = cep;
    if (telefone) adress.telefone = telefone;

    await adress.save();
    return adress;
  }

  async remove(user_id) {
    const adress = await this.findByUser(user_id);
    await adress.destroy();
    return { message: 'Endereço removido com sucesso.' };
  }
}

module.exports = new AdressService();
