const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors(

));
app.use(express.json());





app.get('/', (req, res) => {
  res.send('Server is ready');
});


// app.post('/api/signup', (req, res) => {
//     res.send({ message: 'User signed up successfully' });
// });

const PORT = process.env.PORT ;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  console.log('Connected to DB');
});

