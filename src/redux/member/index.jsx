import { getMember, getMemberRole } from '@api/memberApi';
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

export const fetchMemberRole = createAsyncThunk(
  `${name}/fetchMemberRole`,
  async ({ albumId }) => {
    const {
      data: { data },
    } = await getMemberRole({ albumId });
    return data.role;
  },
);

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
    setLogout: (state) => {
      sessionStorage.removeItem('token');
      state.token = '';
      state.data = { ...initialValue.data };
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
      sessionStorage.removeItem('token');
    },
    [fetchMemberRole.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchMemberRole.fulfilled]: (state, action) => {
      state.data.memberRole = action.payload;
      state.isLoading = false;
    },
    [fetchMemberRole.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});
