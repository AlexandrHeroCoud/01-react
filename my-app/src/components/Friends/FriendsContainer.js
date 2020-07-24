import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unFollow,
    setTotalUsersCount,
    setFetch,
    setToggleIsFollowing, getUsersThunkCrator,
} from "../../redux/Reducers/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/Selectors/UsersSelectors";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class FriendsClass extends React.Component{

    componentDidMount() {
        this.props.getUsersThunkCrator(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = ({},pageNum)=>{
        this.props.getUsersThunkCrator(pageNum,this.props.pageSize)
    }
    render() {
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
        users: getUsers(state),
        isFetching: getIsFetching(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unFollow,setUsers,setCurrentPage,setTotalUsersCount,setFetch, setToggleIsFollowing, getUsersThunkCrator}),
    withAuthRedirect,
)(FriendsClass)