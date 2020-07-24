import ac from "./AvatarComponent.module.css"
import MatrixFunc from "../../../common/MatrixPreloader/MatrixFunc";
import React from "react";
import SimpleModal from "../../../common/ModalWindow/ModalWindow";
import AvatarForm from "./AvatartForm";
import {connect} from "react-redux";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
const AvatarContainer = (props)=>{
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const commentsAvatar = props.comments.map((item)=>{
        return(<div key={item.id}>{item.commentContent}</div>)
    })
    const onEditorAvatar = () =>{
        console.log("onEditorAvatar")
    }
    const expBodyModal = <div>
        {props.isOwner?<EditOutlinedIcon onClick={onEditorAvatar}/>:null}
        <AvatarForm isOwner={props.isOwner} photoUrl={props.photoUrl}/>
        <div>{commentsAvatar}</div>
    </div>
 return (
     <>
     <div className={ac.avatarWrapper}>
         <div className={ac.matrixWrapper}>
             <div className={ac.shadowMatrix}></div>
             <MatrixFunc classString={ac.avatarMatrix} speed={80}/>
         </div>
         <div className={ac.mainImageWrap} onClick={()=>{
             handleOpen()
         }}>
             <div className={ac.shadowAvatar}></div>
             <img  src={props.photoUrl? props.photoUrl : 'https://thumbs.gfycat.com/DampWanCrayfish-size_restricted.gif'} alt=""/>
         </div>
     </div>
         <SimpleModal open={open} userName={props.fullName} handleClose={handleClose} isOwner={props.isOwner} bodyModal={expBodyModal}/>
 </>
    )
}

const mapStateToProps = (state) => {
    return {
        photoUrl: state.ProfileReducer.profileInfo.photos.large,
        fullName: state.ProfileReducer.profileInfo.fullName,
        comments: state.ProfileReducer.comments,
        isOwner: state.ProfileReducer.isOwner,
    }
}
export default connect(mapStateToProps,{})(AvatarContainer)