import React from "react";
import c from './Profile.module.css'
import UserPosts from "./UserPosts/UserPosts";
const Profile = (props) =>{
    return(
        <div key={props.ProfilePage.profileInfo.userId} className={c.content}>
            <img src={props.ProfilePage.profileInfo.imgHeadProfileUrl} alt=""/>
            <div className={c.UserData}>
                <div className={c.Avatar}>
                    <img src={props.ProfilePage.profileInfo.userAvatarUrl}
                         alt=""/>
                </div>
                <div className={c.UserMeta}>
                    <h2>{props.ProfilePage.profileInfo.userName}</h2>
                    <div>{props.ProfilePage.profileInfo.bithday}</div>
                    <div>{props.ProfilePage.profileInfo.city}</div>
                    <div>{props.ProfilePage.profileInfo.status}</div>
                </div>
            </div>
            <UserPosts newPost={props.newPost} addPost={props.addPost} UserPosts={props.ProfilePage.statePost}/>
        </div>
    )
}
export default Profile