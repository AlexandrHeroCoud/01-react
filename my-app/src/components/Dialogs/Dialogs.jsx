import React from "react";
import c from "./Dialogs.module.css"
import UserDialogs from "./UserDialogs/UserDialogs";
//import MessagesWindow from "./MessagesWindow/MessagesWindow";
import MessagesWindowContainer from "./MessagesWindow/MessagesWindowContainer";

const Dialogs = (props) => {
    return (
        <div className={c.dialogsWrapper}>
            <UserDialogs UserDialogs={props.DialogsPage.dialogs} />
            <MessagesWindowContainer />
        </div>
    )
}
export default Dialogs