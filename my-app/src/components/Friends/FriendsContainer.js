import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unFollow,
    setTotalUsersCount,
    setFetch,
    setToggleIsFollowing, getUsersThunkCrator, followSuccess, unFollowSuccess
} from "../../redux/Reducers/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

class FriendsClass extends React.Component{

    componentDidMount() {
        this.props.getUsersThunkCrator(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNum)=>{
        this.props.getUsersThunkCrator(pageNum,this.props.pageSize)
    }
    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return(
            <>
                {this.props.isFetching ?<Preloader /> : null}
                <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
            />
            </>
            )
    }
}


let mapStateToProps = (state)=>{
    return {
        users: state.FriendsReducer.users,
        isFetching: state.FriendsReducer.isFetching,
        pageSize: state.FriendsReducer.pageSize,
        totalUsersCount: state.FriendsReducer.totalUsersCount,
        currentPage: state.FriendsReducer.currentPage,
        followingInProgress: state.FriendsReducer.followingInProgress,
        isAuth: state.AuthReducer.isAuth
    }
}

export default connect(mapStateToProps, {follow, unFollow,setUsers,setCurrentPage,setTotalUsersCount,setFetch, setToggleIsFollowing, getUsersThunkCrator})(FriendsClass)