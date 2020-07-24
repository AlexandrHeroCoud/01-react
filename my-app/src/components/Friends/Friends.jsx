import React from "react";
import {NavLink} from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';
import c from "../../App.module.css"
import User from "./User";
let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesNum = [];
    for (let i = 1; i < pagesCount; i++) {
        pagesNum.push(i)
    }
    return (
        <div className={c.appContent}>

            {props.users.map((u) => {
              return  <User followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow} key={u.id} user={u}/>
            })}
            <div style={{backgroundColor: "#00D8FF"}} >
                <Pagination count={pagesCount} onChange={props.onPageChanged} variant="outlined" shape="rounded" />
            </div>
        </div>
    )
}
export default Friends