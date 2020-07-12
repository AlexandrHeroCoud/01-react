import React from "react";
import c from './Profile.module.css'
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import UserINfo from "./UserInfo/UserInfo";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
 import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 9139
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render(){
        return(
            <div key={1} className={c.content}>
                <UserINfo
                    profileInfo={this.props.state.profileInfo}
                    contacts={''}
                    status={this.props.getUserStatus}
                    updateStatus={this.props.updateUserStatus}
                />
                <UserPostsContainer dispacth={this.props} UserPosts={this.props.state.statePost}/>
            </div>
        )
    }
}
let mapStateToProps = (state) =>({
        state: state.ProfileReducer,
})


export default compose(
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)