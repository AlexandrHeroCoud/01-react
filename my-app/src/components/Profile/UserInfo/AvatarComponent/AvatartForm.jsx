import ac from "./AvatarComponent.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {Form, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setComment} from "../../../../redux/Reducers/ProfileReducer";

const AvatarModalBody = (props) =>{

    const onSubmitComment = (formData) =>{
        props.setComment(formData)
    }
    return (<div>
        <AvatarReduxForm onSubmit={onSubmitComment} photoUrl={props.photoUrl} isOwner={props.isOwner} />
    </div>)
}

const AvatarForm = (props) =>{
    const editMode = () =>{
        if(props.isOwner){
            return(
                <div style={{color:"white"}} className={ac.editMode}>
                    <div className={'commentPhoto'}>
                        <Form onSubmit={props.handleSubmit}>
                            {createField(Textarea, [], 'comment', 'Please write your comment...', 'textarea')}
                            <button>Hack</button>
                        </Form>
                    </div>
                </div>
            )
        } else {
            return(
                <div style={{color:"white"}} className={ac.editMode}>
                    <div className={'commentPhoto'}>
                        <Form onSubmit={props.handleSubmit}>
                            {createField(Textarea, [], 'comment', 'Please write your comment...', 'textarea')}
                            <button>Hack</button>
                        </Form>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <div>
                <img  src={props.photoUrl? props.photoUrl : 'https://thumbs.gfycat.com/DampWanCrayfish-size_restricted.gif'} alt=""/>
            </div>
            {editMode()}
        </div>
    )
}
const AvatarReduxForm = reduxForm({
    form: "AvatarProfile",
})(AvatarForm)
const mapStateToProps = (state) =>({
    photoUrl: state.ProfileReducer.profileInfo.photos.large,
    isOwner: state.ProfileReducer.isOwner
})

export default connect(mapStateToProps, {setComment})(AvatarModalBody)