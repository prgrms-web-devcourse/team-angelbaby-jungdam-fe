import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '../templates/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { MainPage } from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <DefaultTemplate>
              <MainPage />
            </DefaultTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
