import c from "../Profile.module.css";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import AvatarContainer from "./AvatarComponent/AvatarContainer";
const UserInfo = (props)=> {
    const mainPhotoSelected = (f) =>{
        props.savePhoto(f.target.files[0])
    }
    return(
        <>
            <AvatarContainer />
            <div className={c.UserData}>
                <div className={c.Avatar}>
                    {/*<img src={props.profileInfo.photos.small? props.profileInfo.photos.small : 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'}*/}
                    {/*     alt=""/>*/}
                    {/*{props.isOwner &&*/}
                    {/*<label>*/}
                    {/*    Upload<input style={{visibility: 'hidden'}} type={"file"} onChange={mainPhotoSelected}/>*/}
                    {/*</label>}*/}
                    {/*<div>*/}
                    {/*    looking for a job: {props.profileInfo.lookingForAJob? "yes" : "no"}*/}
                    {/*</div>*/}

                </div>
                <div>
                    {Object.keys(props.profileInfo.contacts).map(key =>{
                        return <Contacts contactTittle={key} contactValue={props.profileInfo.contacts[key]}/>
                    })}
                </div>
                <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
                <div className={c.UserMeta}>
                    <h2>fullName: {props.profileInfo.fullName}</h2>
                    <div>aboutMe: {props.profileInfo.aboutMe}</div>
                    <div>lookingForAJob: {props.profileInfo.lookingForAJob}</div>
                    <div>lookingForAJobDescription: {props.profileInfo.lookingForAJobDescription}</div>
                </div>
                {props.isOwner? <button type={'button'}>Edit profile info</button>: null}
            </div>
        </>
        )
}
const Contacts = ({contactTittle, contactValue})=>{
    return <div>{contactTittle}:{contactValue}</div>
}
export default UserInfo