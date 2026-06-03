const db = require('../config/db');

// ✅ CREATE
const createUser = (user, callback) => {
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [user.name, user.email, user.password], callback);
};

// ✅ GET ALL
const getAllUsers = (callback) => {
  const query = 'SELECT * FROM users';
  db.query(query, callback);
};

// ✅ FIND BY EMAIL
const findByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

// ✅ UPDATE
const updateUser = (id, user, callback) => {
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(query, [user.name, user.email, id], callback);
};

// ✅ DELETE
const deleteUser = (id, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], callback);
};

module.exports = {
  createUser,
  getAllUsers,
  findByEmail,
  updateUser,
  deleteUser
};