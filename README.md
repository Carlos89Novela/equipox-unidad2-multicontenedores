# equipox-unidad2-multicontenedores
# 🚀 Unidad 2 - Sistema Multicontenedores

## 📌 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web completa utilizando arquitectura cliente-servidor.  

Incluye:

- ✅ Backend con Node.js + Express
- ✅ Base de datos MySQL
- ✅ Frontend con React (Vite)
- ✅ API REST con CRUD de usuarios
- ✅ Autenticación mediante JWT

---

## 🧱 Tecnologías Utilizadas

### Backend
- Node.js
- Express
- MySQL
- bcryptjs
- jsonwebtoken
- cors
- dotenv

### Frontend
- React
- Vite
- Fetch API

### Otros
- Git / GitHub
- Postman

---

## 📂 Estructura del Proyecto

unidad2-multicontenedores/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── app.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
├── docs/
├── postman/
└── README.md

---

## ⚙️ Instalación y ejecución

### 🔷 1. Clonar repositorio

```bash
git clone URL_DEL_REPO
cd unidad2-multicontenedores

 2. Backend

 cd backend
npm install
npm run dev

Servidor:
http://localhost:3000

3. Frontend

cd frontend
npm install
npm run dev


Aplicación:
http://localhost:5173

🔐 Variables de entorno

Crear archivo .env en backend:

PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_PASSWORD
DB_NAME=unidad2

JWT_SECRET=mi_secreto_super_seguro


🗄️ Base de datos


CREATE DATABASE unidad2;

USE unidad2;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


🌐 Endpoints API
🔐 Autenticación

Método: POST
Rutas:/api/auth/register || /api/auth/login || /api/auth/logout
Descripción: Registrar usuario || Iniciar sesión || Cerrar sesión

👤 Usuarios

Métodos: GET || POST || PUT || DELETE
Rutas: /api/users || /api/users || /api/users/:id || /api/users/:id
Descripción: Obtener usuarios || Crear usuario || Actualizar usuario || Eliminar usuario

🔒 Seguridad

✅ Contraseñas encriptadas con bcrypt
✅ Autenticación con JWT
✅ Rutas protegidas mediante middleware
✅ Token enviado en headers


🖥️ Funcionalidades Frontend

✅ Login de usuario
✅ Registro de usuarios
✅ Listado de usuarios
✅ Edición de usuarios
✅ Logout
✅ Manejo de token JWT


🔄 Flujo del sistema

Usuario inicia sesión
Backend genera JWT
Frontend guarda token
El token se envía en cada petición protegida
Backend valida el token
Se permite acceso a datos


🧪 Pruebas
Las pruebas fueron realizadas con:

✅ Postman (API)
✅ Navegador (Frontend)


📸 Evidencia
Incluye capturas de:

Login funcionando
Token generado
CRUD funcionando
Frontend conectado
Base de datos


👨‍💻 Autor
Carlos Javier Márquez Novela
Soporte 


✅ Estado del Proyecto
✔ Completo
✔ Funcional
✔ Desarrollado con buenas prácticas