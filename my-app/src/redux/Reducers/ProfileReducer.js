import {profileAPI, usersAPI} from "../../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'


let stateInitDefault = {
        profileInfo:{
            userId: null,
            photos: {
                small: "https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b87da423bd60879544270.jpg",
                large: "https://xakep.ru/wp-content/uploads/2018/01/151212/zahod-h.jpg"
            },
            fullName: "Mr.Robot",
            aboutMe: "fsociety",
            contacts: {
                facebook: "facebook.com",
                website: null,
                vk: "vk.com/",
                twitter: "https://twitter.com/",
                instagram: "https://instagram.com/",
                youtube: null,
                github: "github.com",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "test",
        },
        statePost: {
            Posts: [
                {id: 1, header: "Header post1", content: "Fuck the world!!! We are FSociety", time: "4:28"},
                {id: 2, header: "Header post2", content: "Fuck the world!!! We are FSociety", time: "4:28"},
                {id: 3, header: "Header post3", content: "Fuck the world!!! We are FSociety", time: "4:28"},
                {id: 4, header: "Header post4", content: "Fuck the world!!! We are FSociety", time: "4:28"},
            ],
            newPostText: {id: null, header: "", content: "", time: ""}
        },
        userStatus: '',
}

const ProfileReducer = (state = stateInitDefault, action) =>{
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.statePost.newPostText = {
            id: Math.random(), header: action.data.headPost, content: action.data.textPost, time: new Date()}
            return state
        case  ADD_POST:
            let post = {
                id: state.statePost.newPostText.id,
                header: state.statePost.newPostText.header,
                content: state.statePost.newPostText.content,
                time: state.statePost.newPostText.time
            };

            state.statePost.Posts = [...state.statePost.Posts, post]

            state.statePost.newPostText = {
                id: Math.random(), header: '', content: '', time: new Date()
            }
            return state
        case SET_USER_PROFILE:{
            return {...state, profileInfo: action.data}
        }
        case SET_USER_STATUS:{
            return {...state, userStatus: action.status}
        }
        default:
            return state
    }
}
const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    data: profile
})
export const updateNewPostText = (data) => ({
    type: UPDATE_NEW_POST_TEXT,
    data: data
})
export const addPost = () =>({
    type: ADD_POST
})

const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status: status
})

export const getUserProfile = (userId) =>{
    return (dispatch) =>{
        usersAPI.getUserProfileById(userId).then(response=>{
                dispatch(setUserProfile(response.data))
            }
        )
    }
}
export const getUserStatus = (userId) =>{
    return (dispatch) =>{
        profileAPI.getUserStatusById(userId).then(response =>{
            dispatch(setUserStatus(response.data))
        })
    }
}
export const updateUserStatus = (status) =>{
    return (dispatch) =>{
        profileAPI.updateUserStatusById(status).then(response => {
            dispatch(setUserStatus(status))
        }).catch(err=>alert(err))
    }
}



export default ProfileReducer