import {
    CHANGE_NAME
} from "../action/actionTypes";
import initialState from '../store/initialState';
import injectReducer from './helper/injectReducer';

export default injectReducer(initialState.gameInfo, {})