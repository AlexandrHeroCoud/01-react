import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA"

let stateInitDefault = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

/** @function AuthReducer
 *  @param {Object} state
 *  @param {Object} action
    @return state
 */
const AuthReducer = (state = stateInitDefault, action) =>{
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}

/** @function setUserDataAuth()
 *  is ActionCreator
 */
const setUserDataAuth = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        id: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})

/** @function getUserDataAuth()
 *  Get user data of authAPI and set them in STATE
 */
export const getUserDataAuth = () => async (dispatch) => {
    let response = await authAPI.authMe()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserDataAuth(id, login, email, true))
    }
}

/** @function logIn
 *  @param {String} email
 *  @param {String} password
 *  @param {boolean} rememberMe
 */
export const logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getUserDataAuth())
    } else {
        dispatch(stopSubmit("Login", {_error: response.data.messages}))
    }
}

/**
 * logOut
 * Log out user of app and set isAuth = false
 * */
export const logOut = ()=> async (dispatch) => {
    let response = await authAPI.logOut()

    if (response.data.resultCode === 0) {
        dispatch(setUserDataAuth(null, null, null, false))
    }
}



export default AuthReducer