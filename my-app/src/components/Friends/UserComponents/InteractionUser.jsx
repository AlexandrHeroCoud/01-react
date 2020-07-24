import React from "react";
import {NavLink} from "react-router-dom";

const InteractionUser = (props) => {

    return (
        <>
            {props.user.followed ? <button type={'button'}
                                           disabled={props.followingInProgress.some(id => id === props.user.id)}
                                           onClick={() => {
                                               props.unFollow(props.user.id)
                                           }}
                >Unfollow</button>
                : <button type={'button'}
                          disabled={props.followingInProgress.some(id => id === props.user.id)}
                          onClick={() => {
                              props.follow(props.user.id)
                          }}
                >follow</button>}
        </>
    )
}
export default InteractionUser