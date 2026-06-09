import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';

function UsersPage({ setToken }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  
  const loadUsers = async () => {
    const data = await getUsers();

    console.log("Respuesta backend:", data);

    if (Array.isArray(data)) {
      setUsers(data);
    } else {
      if (data.message === "Token inválido" || data.message === "Token requerido") {
        alert("Sesión expirada, vuelve a iniciar sesión 🔐");

        localStorage.removeItem("token");
        setToken('');
      }
    }

  };


  useEffect(() => {
    loadUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleFinish = () => {
    setSelectedUser(null);
    loadUsers();
  };

  return (
    <div>
      <h2>Usuarios</h2>

      <button onClick={handleLogout}>
        Logout
      </button>

      {/* FORMULARIO */}
      <UserForm selectedUser={selectedUser} onFinish={handleFinish} />

      {/* TABLA */}
      <UserTable users={users} onEdit={handleEdit} />

    </div>
  );
}

export default UsersPage;
