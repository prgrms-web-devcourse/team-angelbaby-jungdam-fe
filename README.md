
# 🎞 Jung Dam  - FrontEnd 🎞

<div align="center">   
    <img src="https://user-images.githubusercontent.com/60251579/146893113-3e627c4a-f80e-4d14-903e-845f20d45305.png" width="280px"/>
    <h3>🎞 정답게 주고 받는 우리 가족 이야기 🎞</h3>
</div>

## 📌 배포 URL
- [정담 바로가기](https://www.jungdam.tk)

## 🚆 Server Start
1. `.env` 파일 작성 후, `REACT_APP_HOME, REACT_APP_API_URL, REACT_APP_HOME_URL, REACT_APP_OAUTH2_REDIRECT_URL` 환경 변수 설정 
2. `yarn install`
3. `yarn start`

## 👩‍💻DEMO
- `GIF 준비중`

## 🧑‍💻 팀원 소개

### Front End Developer 🙋

|                                     초이                                      |                                      훈                                       |                                     빙글                                      |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/60251579?v=4" width="200"/> | <img src="https://avatars.githubusercontent.com/u/57757719?v=4" width="200"/> | <img src="https://avatars.githubusercontent.com/u/71081893?v=4" width="200"/> |
|                      [최민석](https://github.com/minsgy)                      |                  [남명훈](https://github.com/MyeonghoonNam)                   |                      [이소진](https://github.com/krungy)                      |
|                     인증 토큰 관리 및 전역 상태 관리, 앨범 도메인, 스토리북 페이지 구현                   |       일기 도메인 구현 및 앨범 메인/디테일 페이지 구현  |         멤버 초대/관리 도메인 구현 및 특별한 순간  구현                |


## 🎞 프로젝트 소개 및 MoodBoard

```
정(情)을 기록하고 담(情)을 나누며 추억에 빠져보세요.
우리 가족만의 앨범을 만들어서 공유 일기를 작성해보세요.

'정담'은 가족 간의 대화가 사라지는 지금, 우리에게 필요한 것이 무엇인지 고민했습니다.
정담은 오늘의 삶, 어제의 삶, 우리 가족의 삶을 공유 할 수 있습니다.
```
<div align='center'>
    <span>
    <img src="https://user-images.githubusercontent.com/60251579/145420445-7d479daa-6412-46ac-9b00-bdd852ec0318.gif" width="250"/>
    </span>
    <span>
    <img src="https://user-images.githubusercontent.com/60251579/146899319-2c840945-35c5-4b63-95d3-259e81381435.png" width="600"/>
    </span>
</div>


## 🔨 기술 스택

### 사용 라이브러리

- react 17.0.2
- react-router-dom v6
- axios
- emotion
- swiper
- storybook
- iconify
- craco
- lottie-web (LottieAnimation)

### 상태 관리 라이브러리
- redux
- redux-logger
- redux-persist
- redux-thunk
- redux-toolkit
- react-router-dom v6
- redux-devtools-extension

### 협업 관리
- 이슈 관리: Github Issue/PR/Project, Notion
- 문서화: Notion
- 커뮤니케이션: Slack, Discord

## 📁프로젝트 디렉토리 구조


<details markdown="1">
<summary>열기/닫기</summary>


```
src
 ┣ assets
 ┃ ┣ Image
 ┃ ┃ ┣ Family.svg
 ┃ ┃ ┣ Logo.svg
 ┃ ┃ ┣ defaultUser.png
 ┃ ┃ ┣ google.png
 ┃ ┃ ┣ kakao.png
 ┃ ┃ ┗ naver.png
 ┃ ┣ colors
 ┃ ┃ ┗ index.jsx
 ┃ ┣ fonts
 ┃ ┃ ┗ index.jsx
 ┃ ┣ lottie
 ┃ ┃ ┣ 404.json
 ┃ ┃ ┣ family.json
 ┃ ┃ ┣ laugh.json
 ┃ ┃ ┣ loading.json
 ┃ ┃ ┗ notepad.json
 ┃ ┗ .DS_Store
 ┣ common
 ┃ ┣ api
 ┃ ┃ ┣ albumApi.jsx
 ┃ ┃ ┣ api.jsx
 ┃ ┃ ┣ commonApi.jsx
 ┃ ┃ ┣ deleteAlbum.jsx
 ┃ ┃ ┣ deleteDiaryComment.jsx
 ┃ ┃ ┣ getAlbumInfo.jsx
 ┃ ┃ ┣ getAlbumMainDiaries.jsx
 ┃ ┃ ┣ getDiaryComments.jsx
 ┃ ┃ ┣ getDiaryContents.jsx
 ┃ ┃ ┣ getExistenceDiaryDate.jsx
 ┃ ┃ ┣ getMemberList.jsx
 ┃ ┃ ┣ getSpecialMoment.jsx
 ┃ ┃ ┣ inviteUser.jsx
 ┃ ┃ ┣ memberApi.jsx
 ┃ ┃ ┣ postDiaryComment.jsx
 ┃ ┃ ┣ postDiaryCreate.jsx
 ┃ ┃ ┣ postImageUpload.jsx
 ┃ ┃ ┣ putAlbumInfo.jsx
 ┃ ┃ ┣ putBookmark.jsx
 ┃ ┃ ┣ readme.md
 ┃ ┃ ┣ searchUser.jsx
 ┃ ┃ ┗ storyBookApi.jsx
 ┃ ┗ utils
 ┃ ┃ ┣ ScrollToTop.jsx
 ┃ ┃ ┣ constants.jsx
 ┃ ┃ ┣ getBase64ToFile.jsx
 ┃ ┃ ┣ readme.md
 ┃ ┃ ┗ replaceTildeWithDate.jsx
 ┣ components
 ┃ ┣ base
 ┃ ┃ ┣ Avatar
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Button
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Divider
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Icon
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Image
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Input
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ LoadingModal
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Lottie
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Modal
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ ProgressBar
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Skeleton
 ┃ ┃ ┃ ┣ Base.jsx
 ┃ ┃ ┃ ┣ Box.jsx
 ┃ ┃ ┃ ┣ Circle.jsx
 ┃ ┃ ┃ ┣ Line.jsx
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Spinner
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Textarea
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Upload
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┗ index.jsx
 ┃ ┣ domain
 ┃ ┃ ┣ AlbumInviteList
 ┃ ┃ ┃ ┣ AlbumInviteCard.jsx
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ AlbumMainHeader
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ AlbumMainTimeline
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ AlbumSwiper
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryComment
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryCommentInputForm
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryContent
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryCreateStepOne
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryCreateStepThree
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryCreateStepTwo
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryHeaderInfo
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ DiaryImages
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Header
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ LandingSwiper
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Navigation
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ Profile
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ ProfileList
 ┃ ┃ ┃ ┣ ProfileItem.jsx
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ StoryBookDiaryList
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┣ UserCard
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┗ index.jsx
 ┃ ┗ .DS_Store
 ┣ hooks
 ┃ ┣ index.jsx
 ┃ ┣ useAlbumValidation.jsx
 ┃ ┣ useAuth.jsx
 ┃ ┣ useClickAway.jsx
 ┃ ┣ useForm.jsx
 ┃ ┗ usePromise.jsx
 ┣ pages
 ┃ ┣ AlbumCreatePage
 ┃ ┃ ┣ AlbumCreateStep1.jsx
 ┃ ┃ ┣ AlbumCreateStep2.jsx
 ┃ ┃ ┣ AlbumCreateStep3.jsx
 ┃ ┃ ┗ index.jsx
 ┃ ┣ AlbumListPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ AlbumMainPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ AlbumSettingsEditPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ AlbumSettingsPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ DiaryCreatePage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ DiaryPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ Error404Page
 ┃ ┃ ┗ index.jsx
 ┃ ┣ LandingPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ LoginPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ MemberInvitePage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ MemberListPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ OAuthRedirect
 ┃ ┃ ┗ index.jsx
 ┃ ┣ ProfilePage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ SpecialMomentPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ StoryBookDetailPage
 ┃ ┃ ┗ index.jsx
 ┃ ┣ StoryBookPage
 ┃ ┃ ┗ index.jsx
 ┃ ┗ index.jsx
 ┣ redux
 ┃ ┣ album
 ┃ ┃ ┗ index.jsx
 ┃ ┣ member
 ┃ ┃ ┗ index.jsx
 ┃ ┣ .DS_Store
 ┃ ┗ store.jsx
 ┣ router
 ┃ ┣ AlbumValidationRoute.jsx
 ┃ ┣ AuthRoute.jsx
 ┃ ┣ PreventedRoute.jsx
 ┃ ┣ Router.jsx
 ┃ ┣ index.jsx
 ┃ ┗ readme.md
 ┣ stories
 ┃ ┣ components
 ┃ ┃ ┣ Avatar.stories.jsx
 ┃ ┃ ┣ Button.stories.jsx
 ┃ ┃ ┣ Divider.stories.jsx
 ┃ ┃ ┣ Icon.stories.js
 ┃ ┃ ┣ Image.stories.jsx
 ┃ ┃ ┣ Input.stories.jsx
 ┃ ┃ ┣ Modal.stories.jsx
 ┃ ┃ ┣ ProgressBar.stories.jsx
 ┃ ┃ ┣ Skeleton.stories.jsx
 ┃ ┃ ┣ Spinner.stories.jsx
 ┃ ┃ ┣ Textarea.stories.jsx
 ┃ ┃ ┗ Upload.stories.jsx
 ┃ ┗ hooks
 ┣ styles
 ┃ ┣ DefaultContainer.jsx
 ┃ ┣ DefaultTemplate.jsx
 ┃ ┣ ResetStyle.jsx
 ┃ ┗ readme.md
 ┣ .DS_Store
 ┣ App.jsx
 ┣ index.jsx
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

</details>

## 👉🏻프로젝트 진행 사항

- ✔ [[극락이들] 1주차 프로젝트 공유사항](https://www.notion.so/1-26887b0b74d749b388454b91a7e1c48c)

- ✔ [[극락이들] 2주차 프로젝트 공유사항](https://www.notion.so/2-83899a046b004f9aaef1c94d43f8fa77)

- ✔ [[극락이들] 3주차 프로젝트 공유사항](https://www.notion.so/3-16fb65f0756146b2adad3698d6771550)



