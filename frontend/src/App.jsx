import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) setToken(saved);
  }, []);

  return (
    <div>
      {token ? (
        <UsersPage token={token} setToken={setToken} />
      ) : (
        <LoginPage setToken={setToken} />
      )}
    </div>
  );
}

export default App;