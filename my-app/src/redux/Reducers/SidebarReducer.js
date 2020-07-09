let stateInitDefault = {
    NavBar:{
        NavBarLinks:[
            {linkId:1, link:"/profile", text:"Profile"},
            {linkId:2,link:"/messages", text: "Messages"},
            {linkId:3,link:"/friends", text: "Friends"},
            {linkId:4,link:"/music", text: "Music"},
            {linkId:5,link:"/settings", text: "Settings"}
        ],
        FriendsIsOnline:[
            {   userId: 1,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            },
            {   userId: 2,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            },
            {   userId: 3,
                userName: "Uncle Ben",
                userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            },
        ]
    }
}

const SidebarReducer = (state = stateInitDefault, action) =>{
    let stateCopy = {...state, NavBar: {...state.NavBar}}
    if (action.type === 'SideBar'){
        stateCopy.NavBar ={
            NavBarLinks:[
                {link:"/profile", text:"Profile"},
                {link:"/messages", text: "Messages"},
                {link:"/friends", text: "Friends"},
                {link:"/music", text: "Music"},
                {link:"/settings", text: "Settings"}
            ],
            FriendsIsOnline:[
                {   userId: 1,
                    userName: "Uncle Ben",
                    userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                },
                {   userId: 2,
                    userName: "Uncle Ben",
                    userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                },
                {   userId: 3,
                    userName: "Uncle Ben",
                    userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                },
            ]
        }
    }
    return stateCopy
}
export default SidebarReducer