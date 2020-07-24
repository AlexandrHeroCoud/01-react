import c from "../Profile.module.css";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import React from "react";
import {requiredField} from "../../../utils/validators/validator";
import {Form, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {savePhoto, saveProfile} from "../../../redux/Reducers/ProfileReducer";

const UserInfoForm = (props) => {
    const mainPhotoSelected = (f) => {
        props.savePhoto(f.target.files[0])
    }

    return (
        <>
            {/*<img*/}
            {/*    src={props.profileInfo.photos.large ? props.profileInfo.photos.large : 'https://thumbs.gfycat.com/DampWanCrayfish-size_restricted.gif'}*/}
            {/*    alt=""/>*/}
            <div className={c.UserData}>
                {/*<div className={c.Avatar}>*/}
                {/*    <img*/}
                {/*        src={props.profileInfo.photos.small ? props.profileInfo.photos.small : 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'}*/}
                {/*        alt=""/>*/}
                {/*    {props.isOwner &&*/}
                {/*    <label>*/}
                {/*        Upload<input style={{visibility: 'hidden'}} type={"file"} onChange={mainPhotoSelected}/>*/}
                {/*    </label>}*/}
                {/*    /!*<div>*!/*/}
                {/*    /!*    looking for a job: {props.profileInfo.lookingForAJob? "yes" : "no"}*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
                <Form onSubmit={props.handleSubmit}>
                    <div>
                        {Object.keys(props.profileInfo.contacts).map(key => {
                            return <Contacts contactTittle={key} contactValue={props.profileInfo.contacts[key]}/>
                        })}
                    </div>
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
            </div>
        </>
    )
}
const Contacts = ({contactTittle, contactValue}) => {
    return <div>{contactTittle}:{contactValue}</div>
}
const ProfileInfoReduxForm = reduxForm({
    form: "ProfileInfoForm"
})(UserInfoForm)
const mapStateToProps = (state) => ({state: state.ProfileReducer })
export default connect(mapStateToProps, {saveProfile, savePhoto})(ProfileInfoReduxForm)