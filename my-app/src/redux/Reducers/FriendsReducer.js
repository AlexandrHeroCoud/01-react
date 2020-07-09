import {usersAPI} from "../../api/api";

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
                users: state.users.map(i=>{
                    if (i.id === action.id){
                        return {...i, followed: true}
                    }
                    return i
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(i=>{
                    if (i.id === action.id){
                        return {...i, followed: false}
                    }
                    return i
                })
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

export const follow = (id) => ({
    type: FOLLOW,
    id: id
})
export const unfollow = (id) =>({
    type: UNFOLLOW,
    id: id
})
export const setUsers = (users) =>({
    type:SET_USERS,
    users: users
})
export const setCurrentPage = (currentPage) =>({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})
export const setTotalUsersCount = (resp) =>({
    type: SET_TOTAL_USERS_COUNT,
    respTotalUsersCount: resp
})

export const setFetch = (isFetching)=>({
    type: IS_FETCH,
    isFetching: isFetching
})
export const setToggleIsFollowing = (isFetching, userId) =>({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
})

// export const getUsersThunk = (dispatch) =>{
//     this.props.setFetch(true)
//     usersAPI.getUsers(this.props.currentPage ,this.props.pageSize).then(data =>{
//             this.props.setUsers(data.items)
//             this.props.setTotalUsersCount(data.totalCount)
//             this.props.setFetch(false)
//         }
//     )
// }


export default FriendsReducer