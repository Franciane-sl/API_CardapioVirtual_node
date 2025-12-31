const UserService = require('../Service/UserService');

class UserController {
  async create(req, res, next) {
    try {
      const { nome, email, senha, tipo } = req.body;

      const user = await UserService.create({
        nome,
        email,
        senha,
        tipo
      });

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      const users = await UserService.findAll();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;

      const user = await UserService.findById(id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, email, senha, tipo } = req.body;

      const user = await UserService.update(id, {
        nome,
        email,
        senha,
        tipo
      });

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;

      await UserService.delete(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
