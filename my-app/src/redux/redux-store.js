import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import SidebarReducer from "./Reducers/SidebarReducer";
import FriendsReducer from "./Reducers/FriendsReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./Reducers/AppReducer";

let reducers = combineReducers({
    DialogsReducer: DialogsReducer,
    ProfileReducer: ProfileReducer,
    SidebarReducer: SidebarReducer,
    FriendsReducer: FriendsReducer,
    AuthReducer: AuthReducer,
    form: formReducer,
    app: AppReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//window.store = store
export default store;