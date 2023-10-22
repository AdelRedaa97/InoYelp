import {combineReducers} from 'redux';
import appSettingsReducer from './appSettingsReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  appSettingsReducer,
  homeReducer,
});
