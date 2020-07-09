import React from "react";
import c from "./UserDialogs.module.css";

const UserDialogs = (props) => {
    let dialogs = props.UserDialogs.map(d => {
        return (
            <div key={d.userId} className={c.userDialog}>
                <div className={c.userPrewiev}>
                    <img src={d.userPreviewUrl} alt=""/>
                </div>
                <div className={c.dataUserMessage}>
                    <div className={c.userName}>
                        {d.userName}
                    </div>
                    <div className={c.lastMessage}>
                        {d.lastMessage}
                    </div>
                    <div className={c.messageTime}>
                        {d.time}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={c.userDialogs}>
            {dialogs}
        </div>
    )
}
export default UserDialogs