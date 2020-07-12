import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {logIn} from "../../redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import c from "../common/FormsControls/FormsControl.module.css"

const Login = (props) =>{
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    const onSubmit = (formData) =>{
        props.logIn(formData.Login, formData.Password, formData.RememberMe)
        console.log('OnSubmit:', formData)
    }
    return(
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={"Login"} component={Input} validate={[requiredField]} type={"email"}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={"Password"} component={Input} validate={[requiredField]} type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"RememberMe"} type={"checkbox"}/> <span>Remember me.</span>
            </div>
            {props.error &&<div className={c.formServerError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)
const mapStateToProps = (state) => ({state: state.AuthReducer, isAuth:state.AuthReducer.isAuth })
export default connect(mapStateToProps, {logIn})(Login)