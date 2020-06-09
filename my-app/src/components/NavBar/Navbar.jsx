import React from "react";
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';
import FriendsOnlain from './UsersOnline/UsersOnlain'
const Navbar = (props) =>{
    return(
        <div className={c.allNavBar}>
        <nav className={c.nav}>
            {props.NavBar.NavBarLinks.map(l =>{
                return (
                    <div>
                        <NavLink to={l.link} activeClassName={c.active}>
                            {l.text}
                        </NavLink>
                    </div>
                )
            })}
        </nav>
            <div className={c.friendsNavBar}>
                <FriendsOnlain usersIsOnlain={props.NavBar.FriendsIsOnline}/>
            </div>
        </div>
    )
}
export default Navbar