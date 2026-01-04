const authService = require('../Service/AuthService');
const AppError = require('../errors/AppError');

class AuthController {
  
  async login(req, res, next) {
    try {
      const { email, senha } = req.body;

      const result = await authService.login({ email, senha });

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async me(req, res, next) {
    try {
      if (!req.user) {
        throw new AppError('Usuário não autenticado.', 401);
      }

      return res.status(200).json({ id: req.user.id, tipo: req.user.tipo });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
