import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toggle } from '../contexts/DrawerToggle/context.ts';
import { IoMdHome } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { MainPage } from '../pages/MainPage/index.tsx';
import { FaHeart } from 'react-icons/fa';

export const AppRoutes = () => {
  const { handleDrawerOptions } = useContext(toggle);
  useEffect(() => {
    handleDrawerOptions([
      {
        icon: <IoMdHome className="text-xl" />,
        text: 'Página Inicial',
        whereTo: '/',
      },
      {
        icon: <FaStar className="text-xl" />,
        text: 'Cidades',
        whereTo: '/cidades',
      },
      {
        icon: <FaHeart className="text-xl" />,
        text: 'Estados',
        whereTo: '/estados',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage title="Página Inicial" menu="Barra de menu">
            <div className="flex">
              <p>página inicial</p>
            </div>
          </MainPage>
        }
      />
      <Route
        path="/cidades"
        element={
          <MainPage title="Cidades">
            <p>página secundária</p>
          </MainPage>
        }
      />
      <Route
        path="/estados"
        element={
          <MainPage title="Estados">
            <p>página três</p>
          </MainPage>
        }
      />
      <Route
        path="*"
        element={
          <MainPage title="Página Inicial">
            <p>página inicial</p>
          </MainPage>
        }
      />
    </Routes>
  );
};
