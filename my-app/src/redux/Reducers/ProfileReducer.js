const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
let stateInitDefault = {
        profileInfo:{
            userId: 1,
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
        }
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

        default:
            return state
    }
}
export const setUserProfile = (profile) => ({
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

export default ProfileReducer