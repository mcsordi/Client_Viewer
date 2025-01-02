import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index.tsx';
import { DrawerToggle } from './contexts/DrawerToggle/index.tsx';
import { ThemeContext } from './contexts/ThemeContext/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <DrawerToggle>
          <AppRoutes />
        </DrawerToggle>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
