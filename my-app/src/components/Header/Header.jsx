import React from "react";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) =>{
    return(
        <header className={c.header}>
            <img src="https://www.pngfind.com/pngs/m/439-4395607_model-image-t-shirt-mr-robot-fsociety-hd.png" alt=""/>
            <div className={c.login}>
                {props.auth.email?<NavLink to={'/login'}>{props.auth.email}</NavLink>:<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header