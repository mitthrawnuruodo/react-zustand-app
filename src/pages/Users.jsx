import useStore from '../store';

function Users() {
  // Retrieve 'users' state from the Zustand store
  const { users } = useStore();

  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users;