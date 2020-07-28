import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import c from './ModalWindow.module.css';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import CloseIcon from '@material-ui/icons/Close';

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
    // root: {
    //     flexGrow: 1,
    //     minWidth: 300,
    //     transform: 'translateZ(0)',
    //     // The position fixed scoping doesn't work in IE 11.
    //     // Disable this demo to preserve the others.
    //     '@media all and (-ms-high-contrast: none)': {
    //         display: 'none',
    //     },
    // },
    icons: {
        width: '14px',
        height: '14px',
        fontSize: "10px",
        background: "inherit",
        border: 'none',
        marginRight: '4px',
        color: '#fff'
    },
    iconsLast: {
        width: '14px',
        height: '14px',
        fontSize: "10px",
        background: "inherit",
        border: 'none',
        marginRight: 0,
        color: '#fff'
    }
}));
export default function SimpleModal(props) {
    const classes = useStyles();
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableBackdropClick={false}
                className={c.modalCustom}
            >
                <div className={c.container}>
                    <div className={c.Terminal}>
                        <div className={c.TerminalToolbar}>
                            {props.userName ? <div className={c.ToolbarUser}>
                                <p>{props.userName}:~</p>
                            </div> : null}
                            <div onClick={props.handleClose} className={c.ToolbarButtons}>
                                <MinimizeIcon classes={{
                                    root: classes.icons
                                }}/>
                                <CropSquareIcon classes={{
                                    root: classes.icons
                                }}/>
                                <CloseIcon classes={{
                                    root: classes.iconsLast,
                                }}/>
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
