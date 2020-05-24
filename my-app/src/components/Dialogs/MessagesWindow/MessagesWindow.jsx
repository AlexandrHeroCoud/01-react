import React from "react";
import c from "./MessagesWindow.module.css"

const MessagesWindow = (props) =>{

    let messagesElems = props.Messages.map(m => {
        return (
            <div key={m.id} className={c.message}>
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
            <div className={c.messages}>
                {messagesElems}
            </div>
            <div className={c.messageInput}>
                <textarea name="message" id="userId" cols="30" rows="10" placeholder="Write your message.."></textarea>
                <div className={c.buttonWrapper}><button>Send</button></div>
            </div>
        </div>
    )
}
export default MessagesWindow