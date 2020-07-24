import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/helpers/helper-object";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const IS_FETCH = "IS-FETCH"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

let stateInitDefault = {
    users:[
        {
            name: "",
            id: 9139,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }
    ],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const FriendsReducer = (state = stateInitDefault, action) =>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed:true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed:false})
            }
        case SET_USERS:
            return{
                ...state,
                users: [ ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.respTotalUsersCount
            }
        case IS_FETCH:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id!=action.userId)]
            }
        default: return{
            ...state
        }
    }
}

/**
 * @function followSuccess()
 * is ActionCreator
 * @param {Number} id,
 * */
export const followSuccess = (id) => ({
    type: FOLLOW,
    id: id
})


/**
 * @function unFollowSuccess()
 * is ActionCreator
 * @param {Number} id,
 * */
export const unFollowSuccess = (id) =>({
    type: UNFOLLOW,
    id: id
})

/**
 * @function setUsers()
 * is ActionCreator
 * @param {Array} users,
 * */
export const setUsers = (users) =>({
    type:SET_USERS,
    users: users
})

/**
 * @function setCurrentPage()
 * is ActionCreator
 * @param {Number} currentPage,
 * */
export const setCurrentPage = (currentPage) =>({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})

/**
 * @function setTotalUsersCount()
 * is ActionCreator
 * @param {Number} totalNumUsers,
 * */
export const setTotalUsersCount = (totalNumUsers) =>({
    type: SET_TOTAL_USERS_COUNT,
    respTotalUsersCount: totalNumUsers
})

/**
 * @function setFetch()
 * is ActionCreator
 * @param {boolean} isFetching,
 * */
export const setFetch = (isFetching)=>({
    type: IS_FETCH,
    isFetching: isFetching
})

/**
 * @function setToggleIsFollowing()
 * is ActionCreator
 * @param {boolean} isFetching,
 * @param {Number} userId
 * */
export const setToggleIsFollowing = (isFetching, userId) =>({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
})

/** getUsersThunkCrator()
 *  @param {Number} currentPage
 *  @param {Number} pageSize
 */

export const getUsersThunkCrator = (currentPage, pageSize) =>{
  return  (dispatch) =>{
        dispatch(setFetch(true))
        usersAPI.getUsers(currentPage ,pageSize).then(data =>{
                dispatch(setFetch(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))

            }
        )
    }
}

/** @function followUnfollowFlow()
 *  @param {Number} userId
 *  @param {Dispatch} dispatch
 *  @param {Method} apiMethod
 *  @param {ActionCreator} actionCreator
 */
const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) =>{
    dispatch(setToggleIsFollowing(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setToggleIsFollowing(false, userId))
}

/** @function follow()
 *  @param {Number} userId
 *  Подписывается на пользователя по id
 */
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(userId, dispatch, usersAPI.followByUser.bind(usersAPI), followSuccess)
    }
}

/** @function unFollow()
 *  @param userId {Number}
 *  Отписывается от пользователя по id
 */
export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(userId, dispatch, usersAPI.unFollowUser.bind(usersAPI), unFollowSuccess)
    }
}

export default FriendsReducer