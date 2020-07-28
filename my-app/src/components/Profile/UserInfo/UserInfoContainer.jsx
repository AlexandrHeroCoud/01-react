import c from "../Profile.module.css";
import React from "react";
import AvatarContainer from "./AvatarComponent/AvatarContainer";
import UserInfoIsOwner from "./UserInfoComponents/UserInfoIsOwner";
const UserInfoContainer = (props)=> {
    return(
        <>
            <AvatarContainer />
            <div className={c.UserData}>
                {/*<ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>*/}
                <div>
                     <UserInfoIsOwner isOwner={props.isOwner} profileInfo={props.profileInfo} />
                </div>
            </div>
        </>
        )
}
// const Contacts = ({contactTittle, contactValue})=>{
//     return <div>{contactTittle}:{contactValue}</div>
// }
export default UserInfoContainer