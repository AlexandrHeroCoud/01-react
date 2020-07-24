import React from "react";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={c.header}>
            <img src="https://www.pngfind.com/pngs/m/439-4395607_model-image-t-shirt-mr-robot-fsociety-hd.png" alt=""/>
            <div className={c.login}>
                {props.auth.isAuth?<div>
                    <NavLink to={'/profile/' + props.auth.id}>{props.auth.email}</NavLink>
                    <a style={{float: "right"}} onClick={()=>props.logOut()}>log Out</a></div>:<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header