import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {logIn} from "../../redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import c from "../common/FormsControls/FormsControl.module.css"
import Preloader from "../common/Preloader/Preloader";
import cLogin from './Login.module.css'
import SimpleModal from "../common/ModalWindow/ModalWindow";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    const onSubmit = (formData) => {
        props.logIn(formData.Login, formData.Password, formData.RememberMe)
    }

    const expBodyModal = () =>{
        return(
            <div className={cLogin.formWrapper}>
                <h1>login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }

    return (
        <>
            <Preloader classString={cLogin.Preloader}/>
            <SimpleModal open={true} userName={'login@root~'}
                         bodyModal={expBodyModal()}/>
        </>
    )
}

const LoginForm = (props) => {
    return (
        <form className={cLogin.form} onSubmit={props.handleSubmit}>
            {createField(Input, [requiredField], 'Login', 'Login', 'email','','')}
            {createField(Input, [requiredField], 'Password', 'Password', 'password', '', '')}
            {createField(Input, [], 'RememberMe', 'Login', 'checkbox', ' Remember me?', '', )}
            {props.error && <div className={c.formServerError}>
                {props.error}
            </div>}
            <div className={cLogin.buttonWrapper}>
                <button >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)
const mapStateToProps = (state) => ({state: state.AuthReducer, isAuth: state.AuthReducer.isAuth})
export default connect(mapStateToProps, {logIn})(Login)