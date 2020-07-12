import React from "react";
import {Field, reduxForm} from "redux-form";
import c from "./MessagesWindow.module.css";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import {addMessageCreator} from "../../../redux/Reducers/DialogsReducer";

const MessageForm = (props) =>{

    const onSubmit = (formData) =>{
        addMessageCreator(formData)
    }

    return(
        <MessageReduxForm onSubmit={onSubmit}/>
    )
}
const maxLengthCreator10 = maxLengthCreator(10)
const Form = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className={c.messageInput}>
            <Field name={'MessageContent'} component={Textarea} validate={[requiredField, maxLengthCreator10]} placeholder="Write your message.."/>
            <div className={c.buttonWrapper}>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: "MessageForm"
})(Form)
export default MessageForm