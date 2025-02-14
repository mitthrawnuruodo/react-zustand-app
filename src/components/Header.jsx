import { useState } from 'react'
import { Link } from 'react-router'
import './Header.css' // Import the CSS file for styling

function Header() {
  // State to toggle the mobile menu open/closed
  const [isOpen, setIsOpen] = useState(false)

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <nav className="navbar">
        {/* Logo section linking back to home */}
        <div className="nav-logo">
          <Link to="/">My App</Link>
        </div>
        {/* Navigation links; class 'open' is added when the mobile menu is toggled */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </div>
        {/* Hamburger button for mobile view */}
        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </header>
  )
}

export default Header