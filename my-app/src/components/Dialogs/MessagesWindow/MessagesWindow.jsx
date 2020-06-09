import React from "react";
import c from "./MessagesWindow.module.css"

const MessagesWindow = (props) =>{
    let messagesElems = props.Messages.map(m => {
        return (
            <div key={m.idnpm} className={c.message}>
                <div className={c.messageContent}>
                    {m.content}
                </div>
                <div className={c.messageTime}>
                    {m.time}
                </div>
            </div>
        )
    } )

    return(
        <div className={c.messagesWindow}>
            <div className={''}>
                {messagesElems}
            </div>
            <div className={c.messageInput}>
                <textarea placeholder="Write your message.."/>
                <div className={c.buttonWrapper}><button>Send</button></div>
            </div>
        </div>
    )
}
export default MessagesWindow