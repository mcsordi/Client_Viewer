import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toggle } from '../contexts/DrawerToggle/context';
import { IoMdHome } from 'react-icons/io';
import { MainPage } from '../pages/MainPage/index';
import { MenuBarContainer } from '../shared/components/MenuBarContainer/MenuBarContainer';
import { FaCity } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { PeopleContainer } from '../shared/components/PeopleContainer/PeopleContainer';

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
        icon: <IoMdPeople className="text-xl" />,
        text: 'Pessoas',
        whereTo: `/pessoas`,
      },
      {
        icon: <FaCity className="text-xl" />,
        text: 'Cidades',
        whereTo: '/cidades',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage title="Página Inicial" menu={<MenuBarContainer tVisible />}>
            <div className="flex mt-5">
              <p>página inicial</p>
            </div>
          </MainPage>
        }
      />
      <Route
        path={`/pessoas`}
        element={
          <MainPage
            title="Listagem de pessoas"
            menu={<MenuBarContainer visible text="nova" />}
          >
            <PeopleContainer />
          </MainPage>
        }
      />
      <Route
        path="/cidades"
        element={
          <MainPage title="Cidades">
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
