import React from 'react';
import {addMessageCreator, updateNewMessageCreator} from "../../../redux/Reducers/DialogsReducer";
import MessagesWindow from "./MessagesWindow";
import {connect} from "react-redux";

// const MessagesWindowContainer = (props)=>{
//     let updateNewMessage = (data) =>{
//         props.dispatch(updateNewMessageCreator(data))
//     }
//     let addMessage = () =>{
//         props.dispatch(addMessageCreator())
//     }
//     return (
//         <MessagesWindow updateNewMessage={updateNewMessage} addMessage={addMessage} DialogsPage={props.DialogsPage} />
//     )
// }

let mapStateToProps = (state)=>{
    return {
        DialogsPage: state.DialogsReducer.DialogsPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessage: (data) =>{
            let action = updateNewMessageCreator(data)
            dispatch(action);
        },
        addMessage: () =>{
            dispatch(addMessageCreator())
        }
    }
}

const MessagesWindowContainer = connect(mapStateToProps, mapDispatchToProps) (MessagesWindow);
export default MessagesWindowContainer
