## API 모듈 및 리스트 관리 디렉토리

- 도메인 별 API 파일을 작성해서 API 모듈 만들기
- ex) `memberApi.jsx`
- 예시

```js
import request from '@api/request';

export const postListApi = async (params) =>
  await request({
    url: `/posts/channel/${CHANNEL_ID}`,
    type: 'get',
    params,
  });

export const UserPostListApi = async ({ userId, limit, offset }) =>
  await request({
    url: `/posts/author/${userId}?offset=${offset}&limit=${limit}`,
    type: 'get',
  });
```
