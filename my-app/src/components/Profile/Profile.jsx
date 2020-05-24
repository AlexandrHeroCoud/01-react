import React from "react";
import c from './Profile.module.css'
import UserPosts from "./UserPosts/UserPosts";
const Profile = (props) =>{
    return(
        <div key={props.ProfileInfo.id} className={c.content}>
            <img src={props.ProfileInfo.imgHeadProfileUrl} alt=""/>
            <div className={c.UserData}>
                <div className={c.Avatar}>
                    <img src={props.ProfileInfo.userAvatarUrl}
                         alt=""/>
                </div>
                <div className={c.UserMeta}>
                    <h2>{props.ProfileInfo.userName}</h2>
                    <div>{props.ProfileInfo.bithday}</div>
                    <div>{props.ProfileInfo.city}</div>
                    <div>{props.ProfileInfo.status}</div>
                </div>
            </div>
            <UserPosts Posts={props.Posts}/>
        </div>
    )
}
export default Profile