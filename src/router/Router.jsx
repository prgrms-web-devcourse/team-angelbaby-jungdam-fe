import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '@styles/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { AuthRoute, PreventedRoute } from '@router';
import { LandingPage, LoginPage, MainPage, OAuthRedirect, MainPage, DiaryPage, DiaryCreatePage } from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Routes>
          {/* PreventedRoute - Token이 존재 할 시 자동 메인(앨범 선택)으로 이동 */}
          <Route element={<PreventedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/redirect" element={<OAuthRedirect />} />
            <Route path="/tutorial" element={<LandingPage />} />
          </Route>
          {/* AuthRoute - Token이 존재해야 접속 가능함. */}
          <Route element={<AuthRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/album" element={<MainPage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/diary/new" element={<DiaryCreatePage />} />
          </Route>
          {/* 임시 404 페이지 */}
          <Route path="*" element={<div>404 Page</div>} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
