import useStore from '../store';

function Footer() {
  const users = useStore((state) => state.users);

  return (
    <footer style={{ textAlign: 'center', padding: '10px 0', background: '#f1f1f1' }}>
      <p>© 2025 My App. All rights reserved. There are {users.length} users available.</p>
    </footer>
  );
}

export default Footer;