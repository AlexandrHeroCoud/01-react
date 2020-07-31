import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import appC from "../../../../App.module.css"
import UserInfoOnlyData from "./UserInfoOnlyData/UserInfoOnlyData";
import UserInfoForm from "./isOwnerForm/UserInfoForm";
import {connect} from "react-redux";
import {saveProfile, setEditMode} from "../../../../redux/Reducers/ProfileReducer";
import {reduxForm} from "redux-form";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2E2E2E',
        color: '#00D8FF',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0, 171, 184, 1), 0px 1px 0px 0px rgba(55,0,0,0.12)'
    },
    icon: {
        backgroundColor:'rgba(0, 171, 184, 1)'
    },
    column: {
        flexBasis: '50%',
    },

    buttonsWrap:{
            backgroundColor: '#000000',
            borderColor: '#1A427D',
            color: '#b3b2ad',
    }
}));

const UserInfoIsOwner =(props) => {
    const classes = useStyles();
    const editMode = (editMode) =>{
        props.setEditMode(editMode)
    }
    const onSubmit = (formData) =>{
        props.saveProfile(formData)
    }
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded classes={classes}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={'#00D8FF'} />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    classes={classes.root}
                >
                    <div className={classes.column}>
                        <h2>fullName: {props.profileInfo.fullName}</h2>
                    </div>
                </AccordionSummary>
                <Divider classes={ {root:classes.icon}} />
                <AccordionDetails className={classes.details}>
                    {props.isOwner?
                        <UserInfoForm classes={classes} initialValues={props.profileInfo}
                                      enableReinitialize={true}
                                      profileInfo={props.profileInfo}
                                      editMode={props.editMode}
                                      onSubmit={onSubmit}
                        />
                        :<UserInfoOnlyData classes={classes} profileInfo={props.profileInfo} />}
                </AccordionDetails>
                {props.isOwner?<>
                <Divider classes={ {root:classes.icon}} />
                <AccordionActions disableSpacing={true} >
                    {props.editMode?
                        <button onClick={()=>editMode(false)} className={appC.buttonGeneral}>Cancel</button>
                         :
                        <button onClick={()=>editMode(true)} className={appC.buttonGeneral}>Edit</button>}
                </AccordionActions></>: null}
            </Accordion>
        </div>
    );
}
const ButtonForForm = (props) =>{
    return(
        <button onClick={props.saveFormProfile} className={appC.buttonGeneral}>{props.text}</button>
    )
}
const ButtonWithReduxForm = reduxForm({
    form: "userInfoForm"
})(ButtonForForm)
const mapStateToProps = (state) =>({
    isOwner: state.ProfileReducer.isOwner,
    editMode: state.ProfileReducer.editMode
})
export default connect(mapStateToProps,{setEditMode,saveProfile})(UserInfoIsOwner)