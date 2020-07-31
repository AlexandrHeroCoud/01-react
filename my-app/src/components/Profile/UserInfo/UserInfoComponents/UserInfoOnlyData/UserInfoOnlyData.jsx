import c from "../../../Profile.module.css";
import React from "react";

const UserInfoOnlyData = (props) => {
    return (<>
            <div className={props.classes.column}>
                <div className={c.UserMeta}>
                    <div>About me: {props.profileInfo.aboutMe}</div>
                    <div>Looking for a job: {props.profileInfo.lookingForAJob? 'True': 'False'}</div>
                    <div>Looking for a job description: {props.profileInfo.lookingForAJobDescription}</div>
                </div>
            </div>
            <div className={props.classes.column}>
                <div>
                    {Object.keys(props.profileInfo.contacts).map(key => {
                        return <Contacts contactTittle={key} contactValue={props.profileInfo.contacts[key]}/>
                    })}
                </div>
            </div>
        </>
    )
}
const Contacts = ({contactTittle, contactValue})=>{
    return <div>{contactTittle}:{contactValue}</div>
}
export default UserInfoOnlyData