import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as BrouserRouter } from 'react-router-dom'

// Render the main application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrouserRouter>
      <App />
    </BrouserRouter>
  </StrictMode>,
)
