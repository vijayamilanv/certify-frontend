import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// PrimeReact Styles
import "primereact/resources/themes/lara-dark-blue/theme.css";  // Dark Blue Theme (Aurora Compatible)
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "aos/dist/aos.css"; // AOS Animations

import { PrimeReactProvider } from 'primereact/api';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
