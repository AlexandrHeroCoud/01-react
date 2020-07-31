import React from "react";
import c from "./FormsControl.module.css"
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validator";



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
            <FormControl {...props}><textarea {...restProps} {...input}/></FormControl>
    )
}

export const Input = (props) =>{
    const {input, meta, child,...restProps} = props
    return (
        <FormControl {...props}><input {...restProps} {...input} /></FormControl>
    )
}

// export const Button = (props) =>{
//     return <button onClick={props.handleSubmit}>{props.textButton}</button>
// }
//
// /**
//  * @function ButtonReduxForm()
//  * @param {String} formName
//  * @return ComponentButton for currentForm
//  **/
// //  export const ButtonReduxForm = (formName, Button) =>{
// //     return reduxForm({
// //         form: formName
// //     })(Button)
// // }

/**
 * @function createField()
 * @param {RectComponent} component
 * @param {Array} validators
 * @param {String} name
 * @param {String} value
 * @param {String} placeholder
 * @param {String} type
 * @param {String} TextInto
 * @param {String} classWrap
 * @return JSX Field for Form
 **/
export const createField = (component, validate, name, placeholder, type, TextInto, classWrap, lableData) => {
    return (
        <div className={c.fieldWrapper + ' '+ classWrap}>
            {lableData?<label>{lableData}</label>:null}
            <Field component={component} validate={validate} name={name} placeholder={placeholder} type={type} />{TextInto}
        </div>
    )
}