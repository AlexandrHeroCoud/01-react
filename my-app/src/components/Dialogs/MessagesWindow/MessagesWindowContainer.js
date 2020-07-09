import React from 'react';
import {addMessageCreator, updateNewMessageCreator} from "../../../redux/Reducers/DialogsReducer";
import MessagesWindow from "./MessagesWindow";
import {connect} from "react-redux";


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
