import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.tsx';
import './index.css';
import { DarkModeProvider } from './contexts/DarkModeContext';

// Initialize Google Analytics
ReactGA.initialize('G-98GB0YLSQC');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>
);
