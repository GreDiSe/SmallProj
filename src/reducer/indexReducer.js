import gameInfo from './gameInfoReducer';
import userInfo from './userInfoReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    userInfo,
    gameInfo
})
