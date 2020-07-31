import React, {useEffect, useState} from "react";
import c from "../../../Profile.module.css";
import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import cUserInfoForm from "./UserInfoForm.module.css"
const UserForm = (props) => {

    let [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        setProfileInfo(props.profileInfo)
    });
    return (<>
            <Form onSubmit={props.handleSubmit} className={cUserInfoForm.form}>
                    <div>
                        <div className={c.UserMeta}>
                            <div>About me:
                                {props.editMode ?
                                    createField(Textarea, [], 'aboutMe', `aboutMe`, 'textarea') :
                                    <span> {profileInfo.aboutMe}</span>}
                            </div>
                            <div>Looking for a job:
                                {props.editMode ?
                                    createField(Input, [], 'lookingForAJob', `lookingForAJob`, 'checkbox',) :
                                    <span> {profileInfo.lookingForAJob ? 'True' : 'False'}</span>}
                            </div>
                            <div>Looking for a job description:
                                {props.editMode ?
                                    createField(Textarea, [], 'lookingForAJobDescription', 'looking For A Job Description', 'textarea')
                                    :
                                    <span> {profileInfo.lookingForAJobDescription}</span>}
                            </div>
                        </div>
                    </div>
                    <div className={cUserInfoForm.contactsWrapper}>
                        <div>
                            {Object.keys(props.profileInfo.contacts).map(key => {
                                return <Contacts editMode={props.editMode} contactTittle={key}
                                                 contactValue={props.profileInfo.contacts[key]}/>
                            })}
                        </div>
                    </div>
                <div>
                    {props.editMode?<button>Save</button>:null}
                </div>
            </Form>
        </>
    )
}
const Contacts = ({contactTittle, contactValue, editMode}) => {

        if(editMode) { return createField(Input, [], `contacts.${contactTittle}`, `https://${contactTittle}`, 'input', null, null, `${contactTittle}: `)}
        else{return <div>
            {contactTittle}: {contactValue}
            </div>}
}
const UserInfoForm = reduxForm({
    form: 'userInfoForm'
})(UserForm)
export default UserInfoForm