import React from "react";
import c from './Profile.module.css'
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import UserINfo from "./UserInfo/UserInfo";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.profileInfo.userId
            if(!userId){
                userId = this.props.autorizedCurrentUserId
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render(){
        return(
            <div key={1} className={c.content}>
                <UserINfo
                    profileInfo={this.props.profileInfo}
                    contacts={''}
                    status={this.props.userStatus}
                    updateStatus={this.props.updateUserStatus}
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
            statePost:  state.ProfileReducer.statePost
        }
    )
}


export default compose(
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)