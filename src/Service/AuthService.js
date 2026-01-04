const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const AppError = require('../errors/AppError');

class AuthService {
  
  async login({ email, senha }) {
    if (!email || !senha) {
      throw new AppError('Email e senha são obrigatórios.', 400);
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Usuário ou senha incorretos.', 401);
    }

    
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw new AppError('Usuário ou senha incorretos.', 401);
    }

    
    const token = jwt.sign(
      { id: user.id, tipo: user.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return { token, user: { id: user.id, nome: user.nome, email: user.email, tipo: user.tipo } };
  }

  
  verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new AppError('Token inválido ou expirado.', 401);
    }
  }
}

module.exports = new AuthService();
