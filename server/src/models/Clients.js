const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Clients = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  installments: [
    {
      type: String,
      required: false,
    }
  ],
  phone: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  bank: {
    label: {
      type: String,
    },
    accountAgent: {
      type: String,
    },
    accountTypeLabel: {
      type: String,
    },
    accountNumber: {
      type: String,
    }
  }
});

Clients.plugin(mongoosePaginate);
mongoose.model('Client', Clients);