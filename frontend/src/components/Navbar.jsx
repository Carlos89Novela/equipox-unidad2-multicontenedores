function Navbar({ onLogout }) {
  return (
    <div style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <h3>Mi App</h3>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
