import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Create a root container and render the App component wrapped in React.StrictMode.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)