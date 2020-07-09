
const SET_USER_DATA_AUTH = "SET-USER-DATA-AUTH"

let stateInitDefault = {
    id: null,
    email: null,
    login: null
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

export const setUserDataAuth = (id, email, login) => ({
    type: SET_USER_DATA_AUTH,
    data: {
        id: id,
        email: email,
        login: login,
    }
})

export default AuthReducer