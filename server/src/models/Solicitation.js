const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SolicitationSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },
  installmentInterest: {
    type: Number,
    required: true,
  },
  comission: {
    type: Number,
    required: true,
  },
  comissionValue: {
    type: Number,
    required: true,
  },
  installmentInterestValue: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  desiredValue: {
    type: Number,
    required: true,
  },
  totalLoan: {
    type: Number,
    required: true,
  }, 
  installmentId: {
    type: String,
    required: true,
  },
  rateTableId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  assets: [
    {
      title: { type: String, required: true },
      file: { type: String, required: true },
    }
  ],
});

SolicitationSchema.plugin(mongoosePaginate);
mongoose.model('Solicitation', SolicitationSchema);