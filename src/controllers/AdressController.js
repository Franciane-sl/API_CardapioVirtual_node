const AdressService = require('../Service/AdressService');

class AdressController {
  async create(req, res, next) {
    try {
      const { user_id, rua, numero, complemento, bairro, cep, telefone } = req.body;

      const adress = await AdressService.create({
        user_id,
        rua,
        numero,
        complemento,
        bairro,
        cep,
        telefone
      });

      return res.status(201).json(adress);
    } catch (error) {
      next(error);
    }
  }

  async findByUser(req, res, next) {
    try {
      const { user_id } = req.params;

      const adress = await AdressService.findByUser(user_id);
      return res.json(adress);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { user_id } = req.params;
      const { rua, numero, complemento, bairro, cep, telefone } = req.body;

      const adress = await AdressService.update(user_id, {
        rua,
        numero,
        complemento,
        bairro,
        cep,
        telefone
      });

      return res.json(adress);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { user_id } = req.params;

      await AdressService.remove(user_id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdressController();
