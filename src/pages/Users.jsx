import useStore from '../store';

function Users() {
  // Retrieve 'users' state from the Zustand store
  const users = useStore((state) => state.users);

  if (!users) return <p>Error loading users.</p>; // Handle potential failure

  if (users.length === 0) return <p>No users found.</p>; // Differentiate from loading

  return (
    <div>
      <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Users;