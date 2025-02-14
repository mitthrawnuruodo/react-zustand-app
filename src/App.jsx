import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useEffect } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import useStore from './store'

function App() {
  const fetchUsers = useStore((state) => state.fetchUsers);

  // Trigger the fetchUsers action from the store when the app mounts
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    // The Router wraps the entire app to enable routing.
    <Router>
      {/* The Header (with nav) appears on every page */}
      <Header />
      <main style={{ padding: '20px' }}>
        {/* Define the routes for the app */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
      {/* The Footer appears on every page */}
      <Footer />
    </Router>
  )
}

export default App;