import React from "react";
import MatrixNative from "../MatrixPreloader/MatrixFunc";

let Preloader = (props)=>{
    return (
        <MatrixNative speed={props.speed}/>
    )
}
export default Preloader