const mongoose = require('mongoose');

const Clients = mongoose.model('Client');

module.exports = {
  async create(req, res) {
    try {
      const { cpf } = req.body;
      const verification = await Clients.find({ cpf });
      if (verification.length != 0) {
        return res.status(401).json({ error: 'Client alredy exists!' });
      }
      const client = await Clients.create(req.body);

      return res.status(200).json(client);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
  async show(req, res) {
    try {
      const clients = await Clients.find();

      return res.status(200).json(clients);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
  async index(req, res) {
    try {
      const { cpf } = req.params;

      const client = await Clients.findOne({ cpf });

      return res.status(200).json(client);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

}