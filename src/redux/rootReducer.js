import { combineReducers } from "redux";
import user from "./slice/user.slice";


const createRootReducer = () =>
    combineReducers({
        user,
    });

export default createRootReducer;
