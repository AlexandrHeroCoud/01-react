import React from "react";
import c from "./UserPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {addPost} from "../../../redux/Reducers/ProfileReducer";

const FormPostProfile = (props) =>{
    const onSubmit = (formData) =>{
        addPost(formData)
    }
    return(
        <>
        <h2>My posts</h2>
        <Form onSubmit={onSubmit} />
        </>
    )
}

const maxLengthCreator10 = maxLengthCreator(10)

const FormPost = (props) =>{
    return(
            <form onSubmit={props.handleSubmit}>
                <Field name={'HeaderPost'} component={'input'}  placeholder='Write your header post...'/>
                <Field name={'ContentPost'} component={Textarea}  placeholder='Write your post...' validate={[requiredField, maxLengthCreator10]}/>
                <div className={c.buttonWrap}>
                    <button>Send</button>
                </div>
            </form>
    )
}

const Form = reduxForm({
    form: "FormPostProfile"
})(FormPost)

export default FormPostProfile