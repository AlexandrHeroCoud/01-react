import React from "react";
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';
import FriendsOnlain from './FriendsOnline/FriendsOnline'
const Navbar = (props) =>{
    return(
        <div className={c.allNavBar}>
        <nav className={c.nav}>
            {props.navBar.NavBarLinks.map(l =>{
                return (
                    <div key={l.linkId}>
                        <NavLink to={l.link} activeClassName={c.active}>
                            {l.text}
                        </NavLink>
                    </div>
                )
            })}
        </nav>
            <div className={c.friendsNavBar}>
                <FriendsOnlain usersIsOnlain={props.navBar.FriendsIsOnline}/>
            </div>
        </div>
    )
}
export default Navbar