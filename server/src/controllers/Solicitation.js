const mongoose = require('mongoose');

const Solicitation = mongoose.model('Solicitation');

module.exports = {
  async create(req, res) {
    const solicitation = await Solicitation.create(req.body);

    return res.status(201).json(solicitation);
  }
};