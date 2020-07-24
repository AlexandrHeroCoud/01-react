import {createSelector} from "reselect";

export const getUsersSelector = (state) =>{
    return state.FriendsReducer.users
}
export const getUsers = createSelector([getUsersSelector], (users) =>{
    return users.filter(u=>true)
})

export const getPageSize = (state) =>{
    return state.FriendsReducer.pageSize
}
export const getIsFetching = (state) =>{
    return state.FriendsReducer.isFetching
}
export const getTotalUsersCount =(state) =>{
    return state.FriendsReducer.totalUsersCount
}
/**
* @function getCurrentPage() Return number current page
* @param {Object} state
* @return {Number}
*/
export const getCurrentPage =(state) =>{
    return state.FriendsReducer.currentPage
}
export const getFollowingInProgress =(state) =>{
    return state.FriendsReducer.followingInProgress
}