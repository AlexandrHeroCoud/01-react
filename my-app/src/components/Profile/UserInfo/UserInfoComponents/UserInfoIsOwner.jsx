import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import appC from "../../../../App.module.css"
import UserInfoOnlyData from "./UserInfoOnlyData";

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
        flexBasis: '33.33%',
    },

    buttonsWrap:{
            backgroundColor: '#000000',
            borderColor: '#1A427D',
            color: '#b3b2ad',
    }
}));

const UserInfoIsOwner =(props) => {
    const classes = useStyles();
    const editMode = () =>{
        
    }
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded classes={classes}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={'#00D8FF'} classes={classes.icon} />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    classes={classes.root}
                >
                    <div className={classes.column}>
                        <h2>fullName: {props.profileInfo.fullName}</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.isOwner?
                        <UserInfoOnlyData classes={classes} profileInfo={props.profileInfo} />
                        :<UserInfoOnlyData classes={classes} profileInfo={props.profileInfo} />}
                </AccordionDetails>
                {props.isOwner?<>
                <Divider classes={ {root:classes.icon}} />
                <AccordionActions disableSpacing={true} >
                    <button onClick={editMode} className={appC.buttonGeneral}>Edit</button>
                    <button className={appC.buttonGeneral}>Save</button>
                </AccordionActions></>: null}
            </Accordion>
        </div>
    );
}
export default UserInfoIsOwner