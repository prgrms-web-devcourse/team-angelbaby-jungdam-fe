import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getInvitations } from '@api/albumApi';
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

export const fetchInvitations = createAsyncThunk(
  `${name}/fetchInvitations`,
  async () => {
    const {
      data: { data },
    } = await getInvitations();
    return data;
  },
);
export const album = createSlice({
  name,
  initialState: initialValue,
  reducers: {
    // 앨범 리스트 추가
    setInvitationsList: (state, action) => {
      state.InviteList = action.payload.invitationsId;
    },
  },
  extraReducers: {
    [fetchInvitations.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchInvitations.fulfilled]: (state, action) => {
      state.InviteList = action.payload;
      state.isLoading = false;
    },
    [fetchInvitations.rejected]: (state, action) => {
      state.InviteList = [];
      state.isLoading = false;
    },
  },
});
