import c from "../Profile.module.css";
import React from "react";
const UserINfo = (props)=> {

    return(
        <>
            <img src={props.profileInfo.photos.large? props.profileInfo.photos.large : 'https://thumbs.gfycat.com/DampWanCrayfish-size_restricted.gif'} alt=""/>
            <div className={c.UserData}>
                <div className={c.Avatar}>
                    <img src={props.profileInfo.photos.small? props.profileInfo.photos.small : 'https://thumbs.gfycat.com/DampWanCrayfish-size_restricted.gif'}
                         alt=""/>
                </div>
                <div className={c.UserMeta}>
                    <h2>{props.profileInfo.fullName}</h2>
                    <div>{props.profileInfo.aboutMe}</div>
                    <div>{props.profileInfo.lookingForAJob}</div>
                    <div>{props.profileInfo.lookingForAJobDescription}</div>
                </div>
            </div>
        </>
        )
}
export default UserINfo