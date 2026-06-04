const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = require('../models/userModel');

// ✅ REGISTER
const register = (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  userModel.createUser(
    { name, email, password: hashedPassword },
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error al registrar' });
      }

      res.status(201).json({
        message: 'Usuario registrado',
        userId: result.insertId
      });
    }
  );
};

// ✅ LOGIN
const login = (req, res) => {
  const { email, password } = req.body;

  userModel.findByEmail(email, (err, user) => {
    if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login exitoso',
      token
    });
  });
};

// ✅ LOGOUT
const logout = (req, res) => {
  res.json({ message: 'Logout exitoso ✅' });
};

module.exports = {
  register,
  login,
  logout
};
``