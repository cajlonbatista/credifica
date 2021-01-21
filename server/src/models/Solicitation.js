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
  contract: {
    type: String,
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
  cardDetails: {
    number: {
      type: String,
      required: true,
    },
    cvc: {
      type: String,
      required: true,
    },
    validate: {
      type: String,
      required: true,
    }
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
  tableId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  paytype: {
    type: String,
    required: true,
  },
  assets: [
    {
      title: { type: String, required: false },
      file: { type: String, required: false },
    }
  ],
  createdAt: {
    type: Date,
    default:  Date.now
  },
});

SolicitationSchema.plugin(mongoosePaginate);
mongoose.model('Solicitation', SolicitationSchema);