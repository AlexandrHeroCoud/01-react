import c from "./AvatarForm.module.css";
import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setComment} from "../../../../../redux/Reducers/ProfileReducer";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {makeStyles} from "@material-ui/core/styles";
import SimpleModal from "../../../../common/ModalWindow/ModalWindow";
import ImgDropAndCrop from "../../../../common/ImageDropAndCropZone/ImgDropAndCrop";


const AvatarModalBody = (props) =>{

    const onSubmitComment = (formData) =>{
        props.setComment(formData)
    }
    return (<div>
        <AvatarReduxForm onSubmit={onSubmitComment} photoUrl={props.photoUrl} isOwner={props.isOwner} />
    </div>)
}

const AvatarForm = (props) => {

    const useStyles = makeStyles((theme) => ({
        icons: {
            width: '14px',
            height: '14px',
            fontSize: "10px",
            background: "inherit",
            border: 'none',
            color: '#fff'
        },
    }))

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // const editMode = () => {
    //     return (
    //         <div style={{color: "white"}} className={c.editMode}>
    //             <div className={'commentPhoto'}>
    //                 <Form onSubmit={props.handleSubmit}>
    //                     {createField(Textarea, [], 'comment', 'Please write your comment...', 'textarea')}
    //                     <button>Hack</button>
    //                 </Form>
    //             </div>
    //         </div>
    //     )
    // }

    const expBodyModal = <ImgDropAndCrop handleModalClose={handleClose} />



    return (
        <div className={c.wrapper}>
            <img
                src={props.photoUrl ? props.photoUrl : 'https://thumbs.gfycat.com/DampWanCrayfish-size_restricted.gif'}
                alt=""/>
            <div className={c.wrapperImage}>
                {props.isOwner?<div className={c.editAvatarButton}>
                    <button onClick={handleOpen} className={c.editAvatarButton}>Upload New Avatar <EditOutlinedIcon classes={{
                        root:classes.icons
                    }}/></button>
                </div>:null}
            </div>
            {/*{editMode()}*/}
            <SimpleModal open={open} userName={props.fullName} handleClose={handleClose}
                         bodyModal={expBodyModal}/>
        </div>
    )
}
const AvatarReduxForm = reduxForm({
    form: "AvatarProfile",
})(AvatarForm)
const mapStateToProps = (state) =>({
    photoUrl: state.ProfileReducer.profileInfo.photos.large,
    isOwner: state.ProfileReducer.isOwner
})

export default connect(mapStateToProps, {setComment})(AvatarModalBody)