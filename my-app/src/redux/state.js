
let renderAllTree = () =>{
    console.log('State changes!')
}
let state = {
    DialogsPage: {
        dialogs: [
            {
                userId: 12,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                lastMessage: "Lorem lorem lorem",
                time: "04:28"
            },
            {
                userId: 13,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                lastMessage: "Lorem lorem lorem",
                time: "04:28"
            },
            {
                userId: 14,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                lastMessage: "Lorem lorem lorem",
                time: "04:28"
            },
            {
                userId: 15,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                lastMessage: "Lorem lorem lorem",
                time: "04:28"
            },
            {
                userId: 16,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                lastMessage: "Lorem lorem lorem",
                time: "04:28"
            },

        ],
        messages: [
            {id: 1, content: "Hi lorem lorem", time: "4:20"},
            {id: 2, content: "How are you lorem lorem", time: "4:22"},
            {id: 3, content: "I am fine, thanks lorem", time: "4:24"},
            {id: 4, content: "How are you lorem", time: "4:25"},
            {id: 5, content: "I am too lorem", time: "4:28"},
        ],
    },
    ProfilePage:{
        profileInfo:{
            userId: 1,
            imgHeadProfileUrl: "https://xakep.ru/wp-content/uploads/2018/01/151212/zahod-h.jpg",
            userAvatarUrl: "https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b87da423bd60879544270.jpg",
            login: "Mr.Robot",
            bithday: "24.08.1996",
            city: "New-York",
            status: "fsociety"
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
    },
    NavBar:{
        NavBarLinks:[
            {link:"/profile", text:"Profile"},
            {link:"/messages", text: "Messages"},
            {link:"/friends", text: "Friends"},
            {link:"/music", text: "Music"},
            {link:"/settings", text: "Settings"}
        ],
        FriendsIsOnline:[
            {   userId: 12,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            },
            {   userId: 12,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            },
            {   userId: 12,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            },
        ]

    }
}
export const addPost = function () {
    let post = {id: state.ProfilePage.statePost.newPostText.id,
        header: state.ProfilePage.statePost.newPostText.header,
        content: state.ProfilePage.statePost.newPostText.content,
        time: state.ProfilePage.statePost.newPostText.time};

    state.ProfilePage.statePost.Posts.push(post)

    state.ProfilePage.statePost.newPostText = {
        id: Math.random(), header: '', content: '', time: new Date()
    }
    renderAllTree()
}
//export let updateNewPostText = function(){let text = 'it-kamasutra.com'}

export const updateNewPostText = (data) => {
    state.ProfilePage.statePost.newPostText = {
        id: Math.random(), header: data.headPost, content: data.textPost, time: new Date()
    }
    renderAllTree()
}

export const subscribe =  (observer) =>{
    renderAllTree = observer
}
export default state