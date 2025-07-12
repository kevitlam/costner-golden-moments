
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Load Vimeo player script
const script = document.createElement('script');
script.src = 'https://player.vimeo.com/api/player.js';
script.async = true;
document.head.appendChild(script);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
