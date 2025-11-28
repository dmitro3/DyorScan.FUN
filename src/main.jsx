import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Tailwind CSS first
import './styles/tailwind.css'

// Import existing app styles (for non-code-analyzer pages)
// import './styles/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
