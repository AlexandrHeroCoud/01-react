import {authAPI} from "../../api/api";

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

const setUserDataAuth = (id, email, login) => ({
    type: SET_USER_DATA_AUTH,
    data: {
        id: id,
        email: email,
        login: login,
        isAuth: true
    }
})
export const getUserDataAuth = () => (dispatch)=>{
    authAPI.authMe().then(response=>{
        if(response.data.resultCode === 0){
            let {id, login, email} = response.data.data;
            dispatch(setUserDataAuth(id, login, email))
        }
    })
}
export default AuthReducer