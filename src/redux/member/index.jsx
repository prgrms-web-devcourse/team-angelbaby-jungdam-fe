import { getMember } from '@api/memberApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const name = 'member';

// 비동기 함수를 활용가능.
const initialValue = {
  data: {
    memberEmail: '',
    memberNickname: '',
    memberAvatar: '',
    memberRole: '',
  },
  token: '',
  isLoading: false,
  error: '',
};

export const fetchMemberLogin = createAsyncThunk(
  `${name}/fetchMemberLogin`,
  async () => {
    const {
      data: { data },
    } = await getMember();
    return data;
  },
);

// const fetchAuthToken = createAsyncThunk(
//   `${name}/fetchAuthToken`,
//   async (token) => {
//     const { data } = await axios.post('/member/token', token);
//     return data;
//   },
// );

export const member = createSlice({
  name,
  initialState: initialValue,
  reducers: {
    setToken: (state, action) => {
      sessionStorage.setItem('token', action.payload);
      state.token = action.payload;
    },
    setMemberInfo: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: {
    [fetchMemberLogin.pending]: (state, action) => {
      state.error = '';
      state.isLoading = true;
    },
    [fetchMemberLogin.fulfilled]: (state, action) => {
      state.data = { ...action.payload };
      state.isLoading = false;
    },
    [fetchMemberLogin.rejected]: (state, action) => {
      state = initialValue;
      state.isLoading = false;
      sessionStorage.removeItem('token');
    },
    // [fetchAuthToken.pending]: (state, action) => {
    //   state.member = initialValue.member;
    //   state.isLoading = true;
    // },
    // [fetchAuthToken.fulfilled]: (state, action) => {
    //   state.member = { ...action.payload };
    //   state.isLoading = false;
    // },
    // [fetchAuthToken.rejected]: (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // },
  },
});
