import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '@styles/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { LandingPage, LoginPage, MainPage, OAuthRedirect } from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/redirect" element={<OAuthRedirect />} />
          <Route path="/tutorial" element={<LandingPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
