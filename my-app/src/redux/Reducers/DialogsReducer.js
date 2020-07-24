const NEW_MESSAGE = "NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let stateInitDefault = {
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
        newMessage: {
            id: null, time: ""
        }
    }
}

const DialogsReducer = (state = stateInitDefault, action) =>{
    switch (action.type) {
        case NEW_MESSAGE:
           return {
               ...state,
               DialogsPage: {
                   messages: state.DialogsPage.messages,
                   newMessage: {id: Math.random(), userId: Math.random(), content: action.data, time: `${new Date().getHours()}:${new Date().getMinutes()}`}
               },
           }
        case ADD_MESSAGE:
           let message = {
               id: state.DialogsPage.newMessage.id,
               content: state.DialogsPage.newMessage.content,
               time: state.DialogsPage.newMessage.time
           };
           return {
               ...state,
               DialogsPage: {
                   messages: [...state.DialogsPage.messages, message],
                   newMessage: {id: null, content: "", time: ""}
               },
           }
       default:
           return state
   }

}

/**
 * updateNewMessageCreator
 * is ActionCreator
 * */
export  const updateNewMessageCreator = (data) => ({
    type: NEW_MESSAGE,
    data: data
})

/**
 * addMessageCreator
 * is ActionCreator
 * */
export const addMessageCreator = (data) =>({
    type: ADD_MESSAGE,
    data: data
})

export default DialogsReducer