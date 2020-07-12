import React from "react";
import c from "./FormsControl.module.css"



export const FormControl = ({input, meta, child,...props}) =>{
    const hasError = meta.touched && meta.error
    return (
        <span className={c.formControl + " " + hasError?c.error:""}>
            {props.children}
            {hasError?<span>{'some Error'}</span>:null}
        </span>
    )
}






export const Textarea = (props) =>{
    const {input, meta, child,...restProps} = props
    return (
            <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props) =>{
    const {input, meta, child,...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}