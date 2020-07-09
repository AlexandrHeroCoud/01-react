import React from "react";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () =>{
    return(
        <header className={c.header}>
            <img src="https://www.pngfind.com/pngs/m/439-4395607_model-image-t-shirt-mr-robot-fsociety-hd.png" alt=""/>
            <div className={c.login}><NavLink to={'/login'}>Login</NavLink></div>
        </header>
    )
}
export default Header