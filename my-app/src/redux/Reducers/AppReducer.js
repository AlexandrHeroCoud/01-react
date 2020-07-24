import {getUserDataAuth} from "./AuthReducer";

const SET_INITIAL_APP = "SET_INITIAL_APP"
let initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_INITIAL_APP:
            return {...state, initialized: true}
        default: return state
    }
}

/** setInitialApp
 *  is ActionCreator
 */
const setInitialApp = () => ({
    type: SET_INITIAL_APP
})
/** initializeApp
 *  is Thunk
 */
export const initializeApp = () => (dispatch)=>{
    let promise = dispatch(getUserDataAuth())
    Promise.all([promise]).then(()=>{
        dispatch(setInitialApp())
    })
}
export default AppReducer