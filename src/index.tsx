import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeContext } from './contexts/ThemeContext/index.tsx';
import { DrawerToggle } from './contexts/DrawerToggle/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <DrawerToggle>
        <App />
      </DrawerToggle>
    </ThemeContext>
  </React.StrictMode>,
);
