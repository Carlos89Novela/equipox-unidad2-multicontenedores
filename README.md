# Sistema de Gestión de Usuarios - Unidad 2 (Multicontenedores)

Descripción del Proyecto
Este proyecto consiste en una aplicación web completa con backend (Node.js), frontend (React) y base de datos MySQL.
Permite gestionar usuarios mediante CRUD y autenticación JWT.

Objetivo
- Implementar CRUD de usuarios
- Autenticación con JWT
- Separar frontend y backend
- Ejecutar con Docker

Tecnologías
Backend: Node.js, Express, MySQL, JWT
Frontend: React, Vite
Otros: Docker, Git, Postman

Instalación Backend
cd backend
npm install
npm run dev

Instalación Frontend
cd frontend
npm install
npm run dev

Base de datos
CREATE DATABASE unidad2;
USE unidad2;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

Variables de entorno (.env)
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_PASSWORD
DB_NAME=unidad2
JWT_SECRET=mi_secreto

Docker
Ejecutar:
docker compose up --build

Endpoints
POST /api/auth/login
POST /api/auth/register
GET /api/users
PUT /api/users/:id
DELETE /api/users/:id

Evidencia
Login funcional
CRUD funcional
JWT funcionando

Autor
Carlos Javier Márquez Novela
