import React, {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import DefaultTemplate from '@styles/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { AuthRoute, PreventedRoute, AlbumValidationRoute } from '@router';
import {
  LandingPage,
  LoginPage,
  OAuthRedirect,
  DiaryPage,
  DiaryCreatePage,
  AlbumListPage,
  AlbumCreatePage,
  SpecialMomentPage,
  MemberListPage,
  MemberInvitePage,
  StoryBookPage,
  StoryBookDetailPage,
  ProfilePage,
  AlbumSettingsPage,
  AlbumSettingsEditPage,
  Error404Page,
  AlbumMainPage,
} from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<Navigate to="/tutorial" />} />
          <Route path="/tutorial" element={<LandingPage />} />
          {/* PreventedRoute - Token이 존재 할 시 자동 메인(앨범 선택)으로 이동 */}
          <Route element={<PreventedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/redirect" element={<OAuthRedirect />} />
          </Route>
          {/* AuthRoute - Token이 존재해야 접속 가능함. */}
          <Route element={<AuthRoute />}>
            <Route path="/album/*">
              <Route path="" element={<AlbumListPage />} />
              <Route path="new" element={<AlbumCreatePage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route element={<AlbumValidationRoute />}>
              <Route path="/album/:albumId">
                <Route path="" element={<AlbumMainPage />} />
                <Route path="diary">
                  <Route path=":diaryId" element={<DiaryPage />} />
                  <Route path="new" element={<DiaryCreatePage />} />
                </Route>
                <Route path="members/*">
                  <Route path="" element={<MemberListPage />} />
                  <Route path="invite" element={<MemberInvitePage />} />
                </Route>
                <Route path="settings/*">
                  <Route path="" element={<AlbumSettingsPage />} />
                  <Route path="edit" element={<AlbumSettingsEditPage />} />
                </Route>
                <Route path="storybook">
                  <Route path="" element={<StoryBookPage />} />
                  <Route
                    path=":participantId"
                    element={<StoryBookDetailPage />}
                  />
                </Route>
                <Route path="moment" element={<SpecialMomentPage />} />
              </Route>
            </Route>
          </Route>
          {/* 임시 404 페이지 */}
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
