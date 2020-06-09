import React from "react";

import c from "./UsersOnlain.module.css"

let UsersOnlain = (props) => {
    return (
        <div className={c.friendsOnlain}>
            <a href={"/allFriendsOnline"}>
                <div className={c.headerFriendsList}>friends@online:~</div>
            </a>
            <div className={c.itemsFriendsOnline}>
                {props.usersIsOnlain.map(d => {
                    return (
                        <a href={`user/profile/${d.userId}`} className={c.userOnline}>
                            <div className={c.userPrewiev}>
                                <img src={d.userPreviewUrl} alt=""/>
                            </div>
                            <div className={c.userName}>
                                <div>
                                    {d.userName}
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
export default UsersOnlain