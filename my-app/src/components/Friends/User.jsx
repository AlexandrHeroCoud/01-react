import React from "react";
import InfoUser from "./UserComponents/InfoUser";
import InteractionUser from "./UserComponents/InteractionUser";

const User = (props) => {

    return (
        <div className={'userItem'}>
            <InfoUser user={props.user} />
            <InteractionUser user={props.user} followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow}/>
        </div>
    )
}
export default User