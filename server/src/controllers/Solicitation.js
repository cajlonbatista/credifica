const mongoose = require('mongoose');

const Solicitation = mongoose.model('Solicitation');

module.exports = {
  async create(req, res) {
    const solicitation = await Solicitation.create(req.body);

    return res.status(201).json(solicitation);
  },
  async index(req, res) {
    const { id } = req.params;
    const solicitation = await Solicitation.findById(id);
    return res.status(200).json(solicitation);
  }
};