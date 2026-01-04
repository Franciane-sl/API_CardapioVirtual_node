const authService = require('../Service/AuthService');
const AppError = require('../errors/AppError');


const authMiddleware = (allowedTypes = []) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) throw new AppError('Token não fornecido.', 401);

      const parts = authHeader.split(' ');
      if (parts.length !== 2 || parts[0] !== 'Bearer') {
        throw new AppError('Token mal formatado.', 401);
      }

      const token = parts[1];
      const decoded = authService.verifyToken(token);

      
      if (allowedTypes.length > 0 && !allowedTypes.includes(decoded.tipo)) {
        throw new AppError('Usuário não autorizado para esta ação.', 403);
      }

      
      req.user = { id: decoded.id, tipo: decoded.tipo };

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = authMiddleware;
