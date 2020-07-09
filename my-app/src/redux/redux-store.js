import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import SidebarReducer from "./Reducers/SidebarReducer";
import FriendsReducer from "./Reducers/FriendsReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    DialogsReducer: DialogsReducer,
    ProfileReducer: ProfileReducer,
    SidebarReducer: SidebarReducer,
    FriendsReducer: FriendsReducer,
    AuthReducer: AuthReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//window.store = store
export default store;