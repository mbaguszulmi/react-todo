import { combineReducers } from "redux";
import navigationReducer from './navigationReducer'
import todoReducer from './todoReducer'

export default combineReducers({
    todo: todoReducer,
    navigation: navigationReducer
})