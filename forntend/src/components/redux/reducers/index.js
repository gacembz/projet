import { combineReducers } from "redux";
import authReducers from "./authReducer"
import prodactReducer from "./prodactrReducers"
const rootReducer=combineReducers({authReducers,prodactReducer})
export default rootReducer;
