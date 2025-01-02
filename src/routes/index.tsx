import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InitialPage } from '../pages/InitialPage/InitialPage.tsx';
import { SecondPage } from '../pages/SecondPage/SecondPage.tsx';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<InitialPage />} />
      <Route path="/pagina-secundaria" element={<SecondPage />} />
      <Route path="*" element={<Navigate to={'/pagina-inicial'} />} />
    </Routes>
  );
};
