import {Form, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {savePhoto, saveProfile} from "../../../../redux/Reducers/ProfileReducer";
import c from "../../Profile.module.css";
import {createField, Input} from "../../../common/FormsControls/FormsControls";
import {requiredField} from "../../../../utils/validators/validator";
import React from "react";
const UserInfoForm = (props) => {

    return (
        <>

                <Form onSubmit={props.handleSubmit}>
                    <div className={c.UserMeta}>
                        {createField(Input, [requiredField], 'fullName', 'Your full name...', 'text')}
                        {createField(Input, [requiredField], 'aboutMe', 'About you...', 'textarea')}
                        {createField(Input, [], 'lookingForAJob', null, 'checkbox', 'Looking for a job?')}
                        {createField(Input, [requiredField], 'lookingForAJobDescription', 'Your are working skills...', 'textarea')}
                        <div>
                            <button>Hack</button>
                        </div>
                    </div>
                </Form>
        </>
    )
}
const ProfileInfoReduxForm = reduxForm({
    form: "ProfileInfoForm"
})(UserInfoForm)
const mapStateToProps = (state) => ({state: state.ProfileReducer })
export default connect(mapStateToProps, {saveProfile, savePhoto})(ProfileInfoReduxForm)