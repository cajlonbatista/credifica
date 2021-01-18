const mongoose = require('mongoose');

const Models = mongoose.model('Models');

module.exports = {
  async create(req, res) {
    const model = await Models.create(req.body);
    return res.status(201).json(model);
  },
  async show(req, res) {
    const models = await Models.find();
    return res.status(200).json(models);
  }
};