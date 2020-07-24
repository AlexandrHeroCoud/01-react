import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import c from './ModalWindow.module.css'
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    //
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const body = (
    //     <div style={modalStyle} className={classes.paper}>
    //         <h2 id="simple-modal-title">Text in a modal</h2>
    //         <p id="simple-modal-description">
    //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //         </p>
    //     </div>
    // );
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={c.container}>
                    <div className={c.Terminal}>
                        <div className={c.TerminalToolbar}>
                            <div className={c.ToolbarButtons}>
                                <button className={c.ToolbarButton +" "+ c.ToolbarButtonExit}>&#10005;</button>
                                <button className={c.ToolbarButton}>&#9472;</button>
                                <button className={c.ToolbarButton}>&#9723;</button>
                            </div>
                            <div className={c.ToolbarUser}>
                                <p>{props.userName}:~</p>
                            </div>
                        </div>
                        <div className={c.TerminalBody}>
                            {/*<div className={c.TerminalText}></div>*/}
                            <div className={c.TerminalPrompt}>
                                {props.bodyModal}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
