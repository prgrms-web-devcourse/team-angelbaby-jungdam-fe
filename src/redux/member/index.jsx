import { createSlice } from '@reduxjs/toolkit';

const name = 'member';

// 비동기 함수를 활용가능.
const initialValue = {
  member: {
    id: '',
    admin: false,
    groupCode: '',
    name: '',
    email: '',
  },
  token: '',
  isLoading: false,
};

// const fetchMemberLogin = createAsyncThunk(
//   `${name}/fetchMemberLogin`,
//   async (member) => {
//     const { data } = await axios.post('/member/login', member);
//     console.log(data);
//   },
// );

export const member = createSlice({
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
    //     state.member = action.payload;
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
    //     state.member = initialValue.member;
    //   },
    // },
  },
  extraReducers: {},
});
