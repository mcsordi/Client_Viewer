import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InitialPage } from '../pages/InitialPage/InitialPage.tsx';
import { SecondPage } from '../pages/SecondPage/SecondPage.tsx';
import { toggle } from '../contexts/DrawerToggle/context.ts';
import { IoMdHome } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

export const AppRoutes = () => {
  const { handleDrawerOptions } = useContext(toggle);
  useEffect(() => {
    handleDrawerOptions([
      {
        icon: <IoMdHome className="text-xl" />,
        text: 'Página Inicial',
        whereTo: '/pagina-inicial',
      },
      {
        icon: <FaStar className="text-xl" />,
        text: 'Cidades',
        whereTo: '/cidades',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<InitialPage />} />
      <Route path="/cidades" element={<SecondPage />} />
      <Route path="*" element={<Navigate to={'/pagina-inicial'} />} />
    </Routes>
  );
};
