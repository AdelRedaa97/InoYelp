import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['languageReducer'],
  // blacklist: [],
};

// Middlewares
const middlewares = [ReduxThunk];
// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

// Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
