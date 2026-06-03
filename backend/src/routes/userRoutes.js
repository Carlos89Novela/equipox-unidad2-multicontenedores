const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware');

// ✅ CREATE
router.post('/users', userController.createUser);

// ✅ READ PROTEGIDO
router.get('/users', verifyToken, userController.getUsers);

// ✅ UPDATE PROTEGIDO
router.put('/users/:id', verifyToken, userController.updateUser);

// ✅ DELETE PROTEGIDO
router.delete('/users/:id', verifyToken, userController.deleteUser);

module.exports = router;
``