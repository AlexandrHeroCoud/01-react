import React from "react";
import {NavLink} from "react-router-dom";

let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesNum = [];
    for (let i = 1; i < pagesCount; i++) {
        pagesNum.push(i)
    }
    return (
        <div className={'appContent'}>
            {props.users.map((item) => {
                return (
                    <div className={'userItem'}>
                        <div>
                            <NavLink to={`/profile/${item.id}`}>
                                {item.photos.small ? <img src={item.photos.small}/> :
                                    <img style={{width: 100 + 'px', height: 100 + 'px'}}
                                         src="https://ak.picdn.net/shutterstock/videos/1010240093/thumb/1.jpg"/>}
                            </NavLink>
                        </div>

                        <div>{item.name}</div>
                        <div>{item.followed}</div>

                        {item.followed ? <button type={'button'}
                                                 disabled={props.followingInProgress.some(id => id === item.id)}
                                                 onClick={() => {
                                                     props.unFollow(item.id)
                                                 }}
                            >Unfollow</button>
                            : <button type={'button'}
                                      disabled={props.followingInProgress.some(id => id === item.id)}
                                      onClick={() => {
                                          props.follow(item.id)
                                      }}
                            >follow</button>}
                    </div>
                )
            })}
            {pagesNum.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }}> {p} </span>
            })}
        </div>
    )
}
export default Friends