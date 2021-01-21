const mongoose = require('mongoose');

const Solicitation = mongoose.model('Solicitation');

module.exports = {
  async create(req, res) {
    try {
      const solicitation = await Solicitation.create(req.body);

      return res.status(201).json(solicitation);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
  async index(req, res) {
    try {
      const { id } = req.params;

      const solicitation = await Solicitation.findById(id);
      return res.status(200).json(solicitation);

    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;

      const solicitation = await Solicitation.findByIdAndUpdate(id, req.body);
      return res.status(200).json(solicitation);

    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
  async show(req, res) {
    try {
      const solicitations = await Solicitation.find();
      const ids = [];
      for (const solicitation of solicitations) {
        ids.push({ id: solicitation._id })
      }
      return res.status(200).json(ids);

    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
};