import React from "react";
import c from './Profile.module.css'
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import UserINfo from "./UserInfo/UserInfo";
import * as axios from "axios";
import {setUserProfile} from "../../redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
    let userId = this.props.match.params.userId
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId).then(response=>{
            this.props.setUserProfile(response.data)
            }

        )
    }

    render(){
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
        state: state.ProfileReducer
})
let WithRouteProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile})(WithRouteProfileContainer)