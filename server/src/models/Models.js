const mongoose = require('mongoose');

const Models = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    installments: [{
        installments: {
            type: Number,
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
    }]
});

mongoose.model('Models', Models);