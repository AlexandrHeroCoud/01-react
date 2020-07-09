import React from "react";
import c from './Profile.module.css'
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import UserINfo from "./UserInfo/UserInfo";
import {getUserProfile} from "../../redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render(){
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return(
            <div key={1} className={c.content}>
                <UserINfo
                    profileInfo={this.props.state.profileInfo}
                    contacts={''}
                />
                <UserPostsContainer dispacth={this.props} UserPosts={this.props.state.statePost}/>
            </div>
        )
    }
}
let mapStateToProps = (state) =>({
        state: state.ProfileReducer,
        isAuth: state.AuthReducer.isAuth
})
let WithRouteProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps,{getUserProfile})(WithRouteProfileContainer)