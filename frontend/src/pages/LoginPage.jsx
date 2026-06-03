import { useState } from 'react';
import { login } from '../services/api';

function LoginPage({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log("BOTÓN PRESIONADO ✅");

    try {
      const res = await login({ email, password });

      console.log("RESPUESTA:", res);

      // ✅ Validar respuesta correctamente
      if (res.token) {
        localStorage.setItem('token', res.token); // guardar token
        setToken(res.token); // cambiar a UsersPage

        alert('Login exitoso ✅');
      } else {
        alert(res.message || 'Error en login ❌');
      }
    } catch (err) {
      console.error("ERROR:", err);
      alert('No se pudo conectar al backend ❌');
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
