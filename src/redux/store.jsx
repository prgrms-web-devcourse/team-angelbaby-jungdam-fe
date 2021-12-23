import { configureStore } from '@reduxjs/toolkit';
import { member } from './member';
import { album } from './album';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { isProduction } from '@utils/constants';
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
  album: album.reducer,
});
const rootReducer = persistReducer(persistConfig, combinedReducer);

let middleware = [];

if (!isProduction) {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);
