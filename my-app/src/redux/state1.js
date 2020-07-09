// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const ADD_POST = "ADD-POST";
// const NEW_MESSAGE = "NEW-MESSAGE";
// const ADD_MESSAGE = "ADD-MESSAGE";
// let store = {
//     _state: {
//         DialogsPage: {
//             dialogs: [
//                 {
//                     userId: 12,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                     lastMessage: "Lorem lorem lorem",
//                     time: "04:28"
//                 },
//                 {
//                     userId: 13,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                     lastMessage: "Lorem lorem lorem",
//                     time: "04:28"
//                 },
//                 {
//                     userId: 14,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                     lastMessage: "Lorem lorem lorem",
//                     time: "04:28"
//                 },
//                 {
//                     userId: 15,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                     lastMessage: "Lorem lorem lorem",
//                     time: "04:28"
//                 },
//                 {
//                     userId: 16,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                     lastMessage: "Lorem lorem lorem",
//                     time: "04:28"
//                 },
//
//             ],
//             messages: [
//                 {id: 1, content: "Hi lorem lorem", time: "4:20"},
//                 {id: 2, content: "How are you lorem lorem", time: "4:22"},
//                 {id: 3, content: "I am fine, thanks lorem", time: "4:24"},
//                 {id: 4, content: "How are you lorem", time: "4:25"},
//                 {id: 5, content: "I am too lorem", time: "4:28"},
//             ],
//             newMessage: {
//                 id: null, content: "", time: ""
//             }
//         },
//         ProfilePage:{
//             profileInfo:{
//                 userId: 1,
//                 imgHeadProfileUrl: "https://xakep.ru/wp-content/uploads/2018/01/151212/zahod-h.jpg",
//                 userAvatarUrl: "https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b87da423bd60879544270.jpg",
//                 login: "Mr.Robot",
//                 bithday: "24.08.1996",
//                 city: "New-York",
//                 status: "fsociety"
//             },
//             statePost: {
//                 Posts: [
//                     {id: 1, header: "Header post1", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//                     {id: 2, header: "Header post2", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//                     {id: 3, header: "Header post3", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//                     {id: 4, header: "Header post4", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//                 ],
//                 newPostText: {id: null, header: "", content: "", time: ""}
//
//             }
//         },
//         NavBar:{
//             NavBarLinks:[
//                 {link:"/profile", text:"ProfileComponent"},
//                 {link:"/messages", text: "Messages"},
//                 {link:"/friends", text: "Friends"},
//                 {link:"/music", text: "Music"},
//                 {link:"/settings", text: "Settings"}
//             ],
//             FriendsIsOnline:[
//                 {   userId: 12,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                 },
//                 {   userId: 12,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                 },
//                 {   userId: 12,
//                     userName: "Uncle Ben",
//                     userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
//                 },
//             ]
//
//         }
//     },
//
//     subscribe(observer){
//         this.renderAllTree = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action){
//         if(action.type === 'UPDATE-NEW-POST-TEXT'){
//             this._state.ProfilePage.statePost.newPostText = {
//                 id: Math.random(), header: action.data.headPost, content: action.data.textPost, time: new Date()
//             }
//             this.renderAllTree()
//         } else if (action.type === 'ADD-POST'){
//             let post = {id: this._state.ProfilePage.statePost.newPostText.id,
//                 header: this._state.ProfilePage.statePost.newPostText.header,
//                 content: this._state.ProfilePage.statePost.newPostText.content,
//                 time: this._state.ProfilePage.statePost.newPostText.time};
//
//             this._state.ProfilePage.statePost.Posts.push(post)
//
//             this._state.ProfilePage.statePost.newPostText = {
//                 id: Math.random(), header: '', content: '', time: new Date()
//             }
//             this.renderAllTree()
//         } else if(action.type === 'NEW-MESSAGE'){
//             this._state.DialogsPage.newMessage = {
//                 id: Math.random(), userId: Math.random(), content: action.data, time: `${new Date().getHours()} : ${new Date().getMinutes()}`
//             }
//             this.renderAllTree()
//         } else  if(action.type === 'ADD-MESSAGE'){
//             let message = {
//                 id: this._state.DialogsPage.newMessage.id,
//                 content: this._state.DialogsPage.newMessage.content,
//                 time: this._state.DialogsPage.newMessage.time
//             };
//             this._state.DialogsPage.messages.push(message)
//
//             this._state.DialogsPage.newMessage = {id: null, content: "", time: ""}
//             this.renderAllTree()
//         }
//     },
// }
// export const updateNewPostTextCreator = (data) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     data: data
// })
// export const addPostCreator = () =>({
//   type: ADD_POST
// })
// export  const updateNewMessageCreator = (data) => ( {
//     type: NEW_MESSAGE,
//     data: data
// })
// export const addMessageCreator = () =>({
//     type: ADD_MESSAGE
// })
//
//
// export default store