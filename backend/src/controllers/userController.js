const userModel = require('../models/userModel');

// ✅ CREATE
const createUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  userModel.createUser({ name, email, password }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al crear usuario' });
    }

    res.status(201).json({
      message: 'Usuario creado',
      userId: result.insertId
    });
  });
};

// ✅ READ
const getUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener usuarios' });
    res.json(results);
  });
};

// ✅ UPDATE
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  userModel.updateUser(id, { name, email }, (err) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar' });

    res.json({ message: 'Usuario actualizado' });
  });
};

// ✅ DELETE
const deleteUser = (req, res) => {
  const { id } = req.params;

  userModel.deleteUser(id, (err) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar' });

    res.json({ message: 'Usuario eliminado' });
  });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};