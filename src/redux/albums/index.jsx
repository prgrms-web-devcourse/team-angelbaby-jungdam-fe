import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const name = 'album';

// 비동기 함수를 활용가능.
const initialValue = {
  Albums: [],
  InviteList: [],
  isLoading: false,
};

// JWT Token 값만 넣으면 됌.
export const fetchAlbums = createAsyncThunk(`${name}/fetchAlbums`, async () => {
  // const { data } = await 앨범 리스트 불러오는 데이터
});

export const albums = createSlice({
  name,
  initialState: initialValue,
  reducers: {
    // LoginStart: {
    //   reducer: (state) => {
    //     state.isLoading = true;
    //   },
    // },
    // LoginSuccess: {
    //   reducer: (state, action) => {
    //     state.isLoading = false;
    //     state.user = action.payload;
    //   },
    //   prepare: ({ token, id, admin, groupCode, name, email }) => ({
    //     payload: {
    //       token,
    //       id,
    //       admin,
    //       groupCode,
    //       name,
    //       email,
    //     },
    //   }),
    // },
    // Logout: {
    //   reducer: (state) => {
    //     state.user = initialValue.user;
    //   },
    // },
  },
  extraReducers: {
    // [fetchAlbums.fulfilled]: (state, action) => {
    //   state.Albums = action.payload;
    // },
  },
});
