require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb'}));

mongoose.connect(`${process.env.BD_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

require('./models/Clients');
require('./models/Solicitation');


app.get('/', (req, res) => {
  return res.json({
    title: 'CREDIFICA API',
    author: 'Francisco Cajlon',
  })
})
app.use('/api', require('./routes/routes'));

app.listen(process.env.PORT, console.log(`API rodando na porta ${process.env.PORT}`));