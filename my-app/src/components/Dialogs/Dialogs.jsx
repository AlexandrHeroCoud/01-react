import React from "react";
import c from "./Dialogs.module.css"
import UserDialogs from "./UserDialogs/UserDialogs";
import MessagesWindow from "./MessagesWindow/MessagesWindow";

const Dialogs = (props) => {
    return (
        <div className={c.dialogsWrapper}>
            <UserDialogs UserDialogs={props.DialogsPage.dialogs} />
            <MessagesWindow Messages={props.DialogsPage.messages} />
        </div>
    )
}
export default Dialogs