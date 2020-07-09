import React from "react";

import c from "./FriendsOnline.module.css"

let FriendsOnline = (props) => {
    return (
        <div className={c.friendsOnlain}>
            <a href={"/allFriendsOnline"}>
                <div className={c.headerFriendsList}>friends@online:~</div>
            </a>
            <div className={c.itemsFriendsOnline}>
                {props.usersIsOnlain.map(d => {
                    return (
                        <a key={d.userId} href={`user/profile/${d.userId}`} className={c.userOnline}>
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
export default FriendsOnline