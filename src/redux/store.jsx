import { configureStore } from '@reduxjs/toolkit';
import { member } from './member';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import session from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: session,
  //  user reducer만 localstorage에 저장.
  whitelist: ['member'],
  // blacklist - 스토리지에 저장하지 않을 리스트
};

const combinedReducer = combineReducers({
  member: member.reducer,
});
const rootReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
