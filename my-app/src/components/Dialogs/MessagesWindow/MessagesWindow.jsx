import React from "react";
import c from "./MessagesWindow.module.css"
const MessagesWindow = (props) =>{
    let updateNewMessage = () =>{
        let data = messageContent.current.value
        props.updateNewMessage(data)
    }
    let addMessage = () => {
        props.addMessage()
    }
    const messageContent = React.createRef()
    let messagesElems = props.DialogsPage.messages.map(m => {
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
            <div className={''}>
                {messagesElems}
            </div>
            <div className={c.messageInput}>
                <textarea ref={messageContent} onChange={updateNewMessage} value={props.DialogsPage.newMessage.content} placeholder="Write your message.."/>
                <div className={c.buttonWrapper}><button onClick={addMessage} type={'button'}>Send</button></div>
            </div>
        </div>
    )
}
export default MessagesWindow