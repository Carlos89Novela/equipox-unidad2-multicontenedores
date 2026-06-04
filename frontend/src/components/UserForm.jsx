import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/api';

function UserForm({ selectedUser, onFinish }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // ✅ cargar datos si estás editando
  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = async () => {
    if (selectedUser) {
      // ✅ EDITAR
      await updateUser(selectedUser.id, { name, email });
      alert('Usuario actualizado ✅');
    } else {
      // ✅ CREAR
      await createUser({
        name,
        email,
        password: '12345678' // temporal o puedes agregar input
      });
      alert('Usuario creado ✅');
    }

    // limpiar
    setName('');
    setEmail('');
    onFinish();
  };

  return (
    <div>
      <h3>{selectedUser ? 'Editar Usuario' : 'Crear Usuario'}</h3>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {selectedUser ? 'Actualizar' : 'Guardar'}
      </button>
    </div>
  );
}

export default UserForm;