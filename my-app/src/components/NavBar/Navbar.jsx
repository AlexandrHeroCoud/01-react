import React from "react";
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={c.nav}>
            <div>
                <NavLink to='/profile' activeClassName={c.active}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={c.active}>
                    Messages
                </NavLink>
            </div>
            <div>
                <a>
                    News
                </a>
            </div>
            <div>
                <a>
                    Music
                </a>
            </div>
            <div>
                <a>
                    Settings
                </a>
            </div>


        </nav>
    )
}
export default Navbar