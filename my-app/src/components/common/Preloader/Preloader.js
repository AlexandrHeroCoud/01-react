import React from "react";
import MatrixNative from "../MatrixPreloader/MatrixFunc";

let Preloader = (props)=>{
    return (
        <MatrixNative classString={props.classString} speed={props.speed}/>
    )
}
export default Preloader