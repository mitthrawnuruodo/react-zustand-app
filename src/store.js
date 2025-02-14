import { create } from 'zustand';

const useStore = create((set, get) => ({
  users: [],
  // Async action to fetch users
  fetchUsers: async () => {
    // Only fetch if users are not already loaded
    if (get().users.length === 0) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        set({ users: data });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  },
}))

export default useStore;