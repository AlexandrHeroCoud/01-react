import React from "react";
import c from './Profile.module.css'
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile, setIsOwner,
    updateUserStatus
} from "../../redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import UserInfoForm, {ProfileInfoReduxForm} from "./UserInfo/UserInfoForm";


class ProfileContainer extends React.Component{

    refreshProfile(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.autorizedCurrentUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
        const isOwner = userId == this.props.autorizedCurrentUserId
        this.props.setIsOwner(isOwner)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userId != this.props.match.params.userId){
            this.refreshProfile()
        }
    }
    onSubmit(formData){
        debugger
        saveProfile(formData)
    }
    render(){
        return(
            <div className={c.content}>
                <UserInfoContainer
                    isOwner={this.props.isOwner}
                    profileInfo={this.props.profileInfo}
                    contacts={''}
                    status={this.props.userStatus}
                    updateStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                />
                <UserPostsContainer dispacth={this.props} UserPosts={this.props.statePost}/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return({
            profileInfo: state.ProfileReducer.profileInfo,
            autorizedCurrentUserId: state.AuthReducer.id,
            userStatus: state.ProfileReducer.userStatus,
            statePost:  state.ProfileReducer.statePost,
            isOwner: state.ProfileReducer.isOwner
        }
    )
}


export default compose(
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateUserStatus, savePhoto, saveProfile, setIsOwner}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)