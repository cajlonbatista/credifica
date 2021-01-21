require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb'}));

mongoose.connect(`mongodb://127.0.0.1:27017/klutch`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

require('./models/Clients');
require('./models/Solicitation');
require('./models/Models');

app.use('/api', require('./routes/routes'));

app.listen(process.env.PORT, console.log(`API rodando na porta ${process.env.PORT}`));