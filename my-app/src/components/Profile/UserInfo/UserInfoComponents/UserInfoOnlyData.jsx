import c from "../../Profile.module.css";
import React from "react";

const UserInfoOnlyData = (props) => {
    return (<>
            <div className={props.classes.column}>
                <div>
                    {Object.keys(props.profileInfo.contacts).map(key => {
                        return <Contacts contactTittle={key} contactValue={props.profileInfo.contacts[key]}/>
                    })}
                </div>
            </div>
            <div className={props.classes.column}>
                <div className={c.UserMeta}>
                    <div>aboutMe: {props.profileInfo.aboutMe}</div>
                    <div>lookingForAJob: {props.profileInfo.lookingForAJob}</div>
                    <div>lookingForAJobDescription: {props.profileInfo.lookingForAJobDescription}</div>
                </div>
            </div>
            <div className={props.classes.column + ' ' + props.classes.helper}>
                <div>
                    {props.isOwner ? <button type={'button'}>Edit profile info</button> : null}
                </div>
            </div>
        </>
    )
}
const Contacts = ({contactTittle, contactValue})=>{
    return <div>{contactTittle}:{contactValue}</div>
}
export default UserInfoOnlyData