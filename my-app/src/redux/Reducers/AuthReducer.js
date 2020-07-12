import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA_AUTH = "SET-USER-DATA-AUTH"

let stateInitDefault = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = stateInitDefault, action) =>{
    switch (action.type) {
        case SET_USER_DATA_AUTH:
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}

const setUserDataAuth = (id, email, login, isAuth) => ({
    type: SET_USER_DATA_AUTH,
    data: {
        id: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})
export const getUserDataAuth = () => (dispatch)=>{
    authAPI.authMe().then(response=>{
        if(response.data.resultCode === 0){
            let {id, login, email} = response.data.data;
            dispatch(setUserDataAuth(id, login, email, true))
        }
    })
}
export const logIn = (email, password, rememberMe)=>(dispatch) =>{
    authAPI.logIn(email,password,rememberMe).then(response=>{
        if(response.data.resultCode === 0){
            dispatch(getUserDataAuth())
        } else {
            dispatch(stopSubmit("Login", {_error: response.data.messages}))
        }
    })
}
export const logOut = ()=>(dispatch) => {
    authAPI.logOut().then(response=>{
        if(response.data.resultCode === 0){

            dispatch(setUserDataAuth(null, null, null, false))
        }
    })
}



export default AuthReducer