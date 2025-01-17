import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index';
import { DrawerToggle } from './contexts/DrawerToggle/index';
import { ThemeContext } from './contexts/ThemeContext/index';

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
