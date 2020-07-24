import React from "react";
import {NavLink} from "react-router-dom";

const InfoUser = (props) => {

    return (
        <>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                    {props.user.photos.small ? <img src={props.user.photos.small}/> :
                        <img style={{width: 100 + 'px', height: 100 + 'px'}}
                             src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"/>}
                </NavLink>
            </div>
            <div>{props.user.name}</div>
          </>
    )
}
export default InfoUser