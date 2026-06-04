const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Rutas
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api', userRoutes);
app.use('/api', authRoutes);

// ✅ Test
app.get('/', (req, res) => {
  res.send('API funcionando ✅');
});

// ✅ Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = app;